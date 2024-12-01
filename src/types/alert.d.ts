export type AlertType = 'error' | 'success' | 'info';

export interface AlertProps {
  id: string;
  message: string;
  type: AlertType;
}

export interface AlertContextType {
  alerts: AlertProps[];
  showAlert: (message: string, type: AlertType) => void;
  removeAlert: (id: string) => void;
} 