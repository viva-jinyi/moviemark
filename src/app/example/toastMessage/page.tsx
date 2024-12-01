"use client";

import BaseButton from "@/components/common/Button/BaseButton";
import { useToastMessageContext } from "@/providers/ToastMessageProvider";

export default function ToastMessagePage() {
	const { showToastMessage } = useToastMessageContext();

	const handleClickSuccess = () => {
		showToastMessage({ type: "success", message: "성공 토스트 메시지 입니다." });
	};

	const handleClickInfo = () => {
		showToastMessage({ type: "info", message: "정보 토스트 메시지 입니다." });
	};

	const handleClickError = () => {
		showToastMessage({ type: "error", message: "실패 토스트 메시지 입니다." });
	};

	return (
		<div className="flex flex-col gap-4">
			<BaseButton
				size="full"
				variant="filled"
				color="primary"
				onClick={handleClickSuccess}
			>
      성공 토스트 메시지
			</BaseButton>
			<BaseButton
				size="full"
				variant="filled"
				color="primary"
				onClick={handleClickInfo}
			>
      정보 토스트 메시지
			</BaseButton>
			<BaseButton
				size="full"
				variant="filled"
				color="primary"
				onClick={handleClickError}
			>
      실패 토스트 메시지
			</BaseButton>
		</div>
	);
}
