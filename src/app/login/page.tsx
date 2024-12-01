import Image from "next/image";

import LoginForm from "@/components/auth/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col flex-1 h-full w-full justify-center">
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
    </div>
  );
}