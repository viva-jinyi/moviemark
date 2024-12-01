import Image from "next/image";

import IconButton from "@/components/common/Button/IconButton";
import { useToastMessageContext } from "@/providers/ToastMessageProvider";
import { type ToastMessageProps } from "@/types/toastMessage";

/**
 * 애니메이션:
 *    - transform + opacity: GPU 가속 활용
 *    - tailwind.config의 keyframes 활용: 일관된 모션
 *
 * 색상 시스템:
 *    - 디자인 토큰 활용: error-500, success-500 등
 *    - 시맨틱 컬러로 상태 표현
 */
const ToastMessageItem = ({ id, message, type }: ToastMessageProps) => {
	const { removeToastMessage } = useToastMessageContext();

	const baseStyles = "flex items-center justify-between w-full p-4 shadow-lg rounded-xl animate-slideIn";

	const typeStyles = {
		error: "bg-error-500 text-white",
		success: "bg-success-500 text-white",
		info: "bg-info-500 text-white",
	};

	return (
		<div
			role="toastMessage"
			className={`${baseStyles} ${typeStyles[type]}`}
		>
			<span className="text-body font-medium pr-4">{message}</span>
			<IconButton
				icon={<Image src="/icons/close.svg" alt="닫기" width={24} height={24} />}
				label="알림 닫기"
				color="white"
				onClick={() => removeToastMessage(id)}
				className="hover:bg-black-200"
			/>
		</div>
	);
};

export default ToastMessageItem;