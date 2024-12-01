import { memo, forwardRef } from 'react';
import type { BaseButtonProps } from '@/types/button';

const BaseButton = memo(forwardRef<HTMLButtonElement, BaseButtonProps>(({
  size = 'md',
  variant = 'filled',
  color = 'primary',
  leftIcon,
  rightIcon,
  isLoading,
  disabled,
  className,
  children,
  ...props
}, ref) => {
  const getButtonStyles = () => {
    const baseStyles = `
      inline-flex
      items-center
      justify-center
      rounded-xl
      font-medium
      transition-all
      duration-200
      disabled:opacity-50
      disabled:cursor-not-allowed
      gap-2
    `;

    const sizeStyles = {
      icon: 'h-[3.2rem] w-[3.2rem]',
      sm: 'h-[4rem] px-4 text-body-sm',
      md: 'h-[4.8rem] px-6 text-body',
      lg: 'h-[5.6rem] px-8 text-body',
      full: 'h-[5.6rem] w-full px-8 text-body'
    }[size];

    const variantStyles = {
      filled: {
        primary: 'bg-primary text-white hover:bg-primary-600 active:bg-primary-700',
        'primary-500': 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
        'primary-400': 'bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-600',
        'icon': '',
        'white': ''
      },
      text: {
        primary: 'text-primary hover:bg-primary/10 active:bg-primary/20',
        'primary-500': 'text-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20',
        'primary-400': 'text-primary-400 hover:bg-primary-400/10 active:bg-primary-400/20',
        'icon': '',
        'white': ''
      },
      icon: {
        primary: '',
        'primary-500': '',
        'primary-400': '',
        'icon': '',
        'white': ''
      }
    }[variant]?.[color] || '';

    const loadingStyles = isLoading ? 'cursor-wait' : '';

    return `${baseStyles} ${sizeStyles} ${variantStyles} ${loadingStyles} ${className || ''}`;
  };

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={getButtonStyles()}
      {...props}
    >
      {leftIcon && <span className="inline-flex">{leftIcon}</span>}
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          로딩중...
        </span>
      ) : (
        children
      )}
      {rightIcon && <span className="inline-flex">{rightIcon}</span>}
    </button>
  );
}));

BaseButton.displayName = 'BaseButton';

export default BaseButton; 