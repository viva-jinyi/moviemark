'use client';

import { useSignUpForm } from "./useSignUpForm";

import TextInput from "@/components/common/Input/TextInput";
import PasswordInput from "@/components/common/Input/PasswordInput";
import BaseButton from "@/components/common/Button/BaseButton";

import { EmailIcon, LockIcon } from "@/components/common/Icons";

export interface SignUpFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const SignUpForm = ({ onSuccess, onError }: SignUpFormProps) => {
  const {
    email,
    password,
    errors,
    isLoading,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange
  } = useSignUpForm({ onSuccess, onError });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 w-full max-w-[48.6rem]"
      noValidate
    >
      <h1 className='text-heading-1 text-white mb-20'>Sign up</h1>
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

export default SignUpForm;