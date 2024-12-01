'use client';

import { forwardRef, memo, useState } from 'react';
import BaseInput from './BaseInput';
import type { BaseInputProps } from '@/types/input';
import { EyeIcon } from '@/components/common/Icons';

export type PasswordInputProps = Omit<BaseInputProps, 'type' | 'rightElement'>;

const PasswordInput = memo(forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const VisibilityToggle = (
    <button
      type="button"
      onClick={toggleVisibility}
      className="p-2 text-gray-400 hover:text-gray-300 transition-colors"
      aria-label={isVisible ? '비밀번호 숨기기' : '비밀번호 표시'}
    >
      <EyeIcon className={isVisible ? 'opacity-70' : 'opacity-100'} />
    </button>
  );

  return (
    <BaseInput
      type={isVisible ? 'text' : 'password'}
      ref={ref}
      rightElement={VisibilityToggle}
      {...props}
    />
  );
}));

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;