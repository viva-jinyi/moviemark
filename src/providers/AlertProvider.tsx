'use client';

import { AlertContextType, AlertProps } from '@/types/alert';
import { createContext, useContext, useState, useCallback } from 'react';

const AlertContext = createContext<AlertContextType | null>(null);

/**
 * Alert 상태 관리를 위한 Context Provider
 * 
 * 특징:
 * 1. 전역 상태 관리: 앱 어디서나 Alert 표시 가능
 * 2. 자동 제거: 3초 후 자동으로 Alert 제거
 * 3. 중복 방지: 동일한 메시지의 Alert 중복 표시 방지
 */
export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  const removeAlert = useCallback((id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  }, []);

  const showAlert = useCallback((message: string, type: AlertProps['type']) => {
    const id = Math.random().toString(36).substring(7);
    
    // 중복 메시지 방지
    if (alerts.some(alert => alert.message === message)) {
      return;
    }

    setAlerts(prev => [...prev, { id, message, type }]);

    // 3초 후 자동 제거
    setTimeout(() => removeAlert(id), 3000);
  }, [alerts, removeAlert]);

  return (
    <AlertContext.Provider value={{ alerts, showAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlertContext must be used within AlertProvider');
  }
  return context;
}; 