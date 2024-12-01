"use client";

import { useToastMessageContext } from "@/providers/ToastMessageProvider";

import ToastMessageItem from "./ToastMessageItem";

/**
 * ToastMessage 컨테이너 컴포넌트
 *
 * 특징:
 * 1. 포지셔닝: 화면 하단, 왼쪽에 고정
 * 2. 스택 구조: 여러 ToastMessage을 순차적으로 표시
 * 3. 반응형: 모바일 환경에서도 적절한 여백 유지
 */
const ToastMessageContainer = () => {
	const { toastMessages } = useToastMessageContext();

	return (
		<div
			role="toastMessage"
			aria-live="polite"
			className="fixed bottom-[7.5rem] left-[4.6rem] z-50 flex flex-col gap-4 w-full max-w-[40rem] px-4"
		>
			{toastMessages.map(toastMessage => (
				<ToastMessageItem key={toastMessage.id} {...toastMessage} />
			))}
		</div>
	);
};

export default ToastMessageContainer;