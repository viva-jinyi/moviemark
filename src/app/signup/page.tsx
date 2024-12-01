import Image from "next/image";

import SignUpForm from "@/components/auth/SignUpForm/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center w-full gap-[12rem]">
      <Image
        src="/images/sally.png"
        alt="sally"
        width={486}
        height={584}
        className="text-white"
      />
      <SignUpForm />
    </div>
  );
}