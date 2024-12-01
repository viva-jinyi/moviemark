'use client';

import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { type AlertProps, type AlertContextType } from '@/types/alert';

const AlertContext = createContext<AlertContextType | null>(null);

/**
 * Alert 상태 관리 Provider
 *
 * useRef + Set을 사용하는 이유:
 * 1. useRef:
 *    - React에서 값을 "기억"하는 상자라고 생각하면 됨
 *    - useState와 달리 값이 변해도 화면이 다시 그려지지 않음
 *    - 컴포넌트가 리렌더링되어도 이 값은 유지됨
 *
 * 2. Set:
 *    - JavaScript의 배열과 비슷하지만 중복을 허용하지 않는 특별한 배열
 *    - 여러 타이머를 관리할 때 유용함
 *    - add로 추가, delete로 제거가 매우 빠름
 *
 * 실제 사용 예시:
 * - Alert가 사라질 때 타이머를 설정하는데, 이 타이머들을 useRef + Set으로 관리
 * - 컴포넌트가 사라질 때 실행 중인 모든 타이머를 한 번에 정리 가능
 */
export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);
  const timeoutIds = useRef(new Set<NodeJS.Timeout>());

  // 컴포넌트가 사라질 때 실행 중인 모든 타이머 정리
  useEffect(() => {
    return () => {
      timeoutIds.current.forEach(id => clearTimeout(id));
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

    // 3초 후 자동으로 알림 제거하는 타이머 설정
    const timeoutId = setTimeout(() => {
      removeAlert(id);
      timeoutIds.current.delete(timeoutId); // 타이머 제거
    }, 3000);

    timeoutIds.current.add(timeoutId); // 새로운 타이머 추가
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