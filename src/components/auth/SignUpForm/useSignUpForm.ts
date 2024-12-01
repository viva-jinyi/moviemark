import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { validateEmail, validatePassword } from '@/features/auth/utils/validation';
import { signup } from '@/features/auth/api/auth';
import { useToastMessageContext } from '@/providers/ToastMessageProvider';

interface SignUpFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export const useSignUpForm = ({ onSuccess, onError }: SignUpFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const { showToastMessage } = useToastMessageContext();

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};

    const emailError = validateEmail(email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [email, password]);

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors(prev => ({ ...prev, email: '' }));
  }, []);

  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrors(prev => ({ ...prev, password: '' }));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await signup({ email, password });
      showToastMessage({ type: 'success', message: '회원가입 성공!' });
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '회원가입 실패';
      showToastMessage({ type: 'error', message: errorMessage });
      onError?.(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    errors,
    isLoading,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange
  };
};