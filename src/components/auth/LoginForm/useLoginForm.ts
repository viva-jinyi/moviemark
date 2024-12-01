import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { useAlertContext } from '@/providers/AlertProvider';
import { validateEmail, validatePassword } from '@/features/auth/utils/validation';
import { login } from '@/features/auth/api/auth';

interface UseLoginFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export const useLoginForm = ({ onSuccess, onError }: UseLoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlertContext();

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
      await login({ email, password });
      showAlert({ type: 'success', message: '로그인 성공!' });
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '로그인 실패';
      showAlert({ type: 'error', message: errorMessage });
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