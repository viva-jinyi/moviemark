"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import SignUpForm from "@/components/auth/SignUpForm/SignUpForm";

// 1.재사용성
// SignUpForm은 성공/실패 후의 동작을 모르고, 순수하게 폼 기능만 담당
// 다른 페이지에서도 다른 동작을 지정해서 재사용 가능
// 2. 유연성
// 회원가입 후 로그인 페이지로 이동할지, 메인으로 갈지는 사용하는 쪽에서 결정
// 에러 처리도 상황에 맞게 다르게 할 수 있음
// 3. 테스트 용이성
// 폼 컴포넌트만 따로 테스트하기 쉬움
// 성공/실패 시나리오를 쉽게 테스트할 수 있음
// 이런 패턴을 "콜백 props 패턴"이라고 하며, React에서 많이 사용되는 패턴입니다!

export default function SignUpPage() {
	const router = useRouter();

	const handleSignUpSuccess = () => {
		// 회원가입 성공 시 로그인 페이지로 이동
		router.push("/login");
	};

	const handleSignUpError = (error: Error) => {
		// 에러 로깅이나 분석을 위한 처리
		console.error("회원가입 실패:", error);
	};

	return (
		<div className="flex flex-col flex-1 h-full w-full justify-center">
			<div className="flex items-center justify-center w-full gap-[12rem]">
				<div className="flex-1">
					<Image
						src="/images/sally.png"
						alt="sally"
						width={486}
						height={584}
						className="text-white"
					/>
				</div>
				<div className="flex-1">
					<SignUpForm
						onSuccess={handleSignUpSuccess}
						onError={handleSignUpError}
					/>
				</div>
			</div>
		</div>
	);
}