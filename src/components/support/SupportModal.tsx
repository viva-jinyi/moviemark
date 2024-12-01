"use client";  // 필수: Portal, DOM 조작, 이벤트 핸들링 때문

import { useState } from "react";

import BaseButton from "@/components/common/Button/BaseButton";
import TextArea from "@/components/common/Input/TextArea";
import BaseModal from "@/components/common/Modal/BaseModal";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * 고객 지원 모달 컴포넌트
 *
 * 'use client' 지시문이 필요한 이유:
 * 1. React Portal 사용 (document.body 접근)
 * 2. DOM 조작 (모달 표시/숨김)
 * 3. 브라우저 이벤트 핸들링 (키보드, 클릭)
 */

const SupportModal = ({ isOpen, onClose }: SupportModalProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [content, setContent] = useState("");

	const handleSubmit = async () => {
		if (!content.trim()) return;

		setIsLoading(true);
		try {
			// API 호출 로직
			await new Promise(resolve => setTimeout(resolve, 1000));
			onClose();
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<BaseModal isOpen={isOpen} onClose={onClose}>
			<div>
				<div className="px-8 py-6 text-center">
					<h2 className="text-heading-4 text-white">
            Please write down any<br />inconveniences.
					</h2>
				</div>

				<div className="p-8">
					<TextArea
						placeholder="Please write out."
						value={content}
						onChange={(e) => setContent(e.target.value)}
						rows={6}
						maxLength={500}
					/>

					<BaseButton
						size="full"
						variant="filled"
						color="primary-500"
						onClick={handleSubmit}
						isLoading={isLoading}
						className="mt-8"
					>
            Suggest
					</BaseButton>
				</div>
			</div>
		</BaseModal>
	);
};

export default SupportModal;