export type ButtonSize = 'md' | 'lg' | 'full';
export type ButtonVariant = 'filled' | 'text';
export type ButtonColor = 'primary' | 'primary-500' | 'primary-400';

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
}