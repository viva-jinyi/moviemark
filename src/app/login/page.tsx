import LoginForm from '@/components/auth/LoginForm/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center w-full gap-[12rem]">
      <Image
        src="/images/sally.png"
        alt="sally"
        width={486}
        height={584}
        className="text-white"
      />
      <LoginForm />
    </div>
  );
}