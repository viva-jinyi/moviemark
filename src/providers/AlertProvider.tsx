'use client';

import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { type AlertProps, type AlertContextType } from '@/types/alert';

const AlertContext = createContext<AlertContextType | null>(null);

/**
 * Alert 상태 관리 Provider
 * 
 * 기술적 결정:
 * 1. useRef + setTimeout:
 *    - 컴포넌트 언마운트 시 메모리 누수 방지
 *    - cleanup 함수로 타이머 정리
 * 
 * 2. useCallback:
 *    - 함수 재생성 방지로 불필요한 리렌더링 최적화
 *    - 자식 컴포넌트 메모이제이션 지원
 * 
 * 3. Set 자료구조:
 *    - 중복 메시지 처리의 시간복잡도 O(1)
 *    - 메모리 효율적 관리
 */
export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);
  const timeoutIds = useRef(new Set<NodeJS.Timeout>());

  // Cleanup timeouts on unmount
  useEffect(() => {
    const timeouts = timeoutIds.current;
    return () => {
      timeouts.forEach(id => clearTimeout(id));
    };
  }, []);

  const removeAlert = useCallback((id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  }, []);

  const showAlert = useCallback(({ message, type }: { message: string; type: AlertProps['type'] }) => {
    const id = Math.random().toString(36).substring(7);

    if (alerts.some(alert => alert.message === message)) {
      return;
    }

    setAlerts(prev => [...prev, { id, message, type }]);

    const timeoutId = setTimeout(() => {
      removeAlert(id);
      timeoutIds.current.delete(timeoutId);
    }, 2500);

    timeoutIds.current.add(timeoutId);
  }, [alerts, removeAlert]);

  return (
    <AlertContext.Provider value={{ alerts, showAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlertContext must be used within AlertProvider');
  }
  return context;
};