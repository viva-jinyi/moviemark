'use client';

import TextInput from "@/components/common/Input/TextInput";
import PasswordInput from "@/components/common/Input/PasswordInput";
import { EmailIcon, LockIcon } from "@/components/common/Icons";
import { useLoginForm } from "./useLoginForm";
import BaseButton from "@/components/common/Button/BaseButton";

export interface LoginFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const LoginForm = ({ onSuccess, onError }: LoginFormProps) => {
  const {
    email,
    password,
    errors,
    isLoading,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange
  } = useLoginForm({ onSuccess, onError });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-[48.6rem]"
      noValidate
    >
      <TextInput
        label="이메일"
        placeholder="이메일을 입력하세요"
        icon={<EmailIcon />}
        required
        value={email}
        onChange={handleEmailChange}
        validationState={errors.email ? 'invalid' : 'default'}
        error={errors.email}
        disabled={isLoading}
      />
      <PasswordInput
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        icon={<LockIcon />}
        required
        value={password}
        onChange={handlePasswordChange}
        validationState={errors.password ? 'invalid' : 'default'}
        error={errors.password}
        disabled={isLoading}
      />
      <BaseButton
        type="submit"
        size="full"
        variant="filled"
        color="primary"
        isLoading={isLoading}
        disabled={isLoading}
      >
        {isLoading ? '로그인 중...' : '로그인'}
      </BaseButton>
    </form>
  );
};

export default LoginForm;