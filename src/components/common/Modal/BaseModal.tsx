"use client";

import Image from "next/image";

import { useModal } from "@/hooks/useModal";
import { BaseModalProps } from "@/types/modal";

import ModalOverlay from "./ModalOverlay";
import ModalPortal from "./ModalPortal";
import IconButton from "../Button/IconButton";

/**
 * 기본 모달 컴포넌트
 *
 * 특징:
 * 1. 재사용성: 모든 모달의 기본 구조를 제공
 * 2. 접근성: 키보드 네비게이션 및 aria 속성 지원
 * 3. Portal: React Portal을 통한 DOM 계층 분리
 *
 * 사용예시:
 * <BaseModal isOpen={isOpen} onClose={handleClose}>
 *   <div>모달 내용</div>
 * </BaseModal>
 */
const BaseModal = ({ isOpen, onClose, children }: BaseModalProps) => {
	// 모달 관련 공통 로직 (키보드, 스크롤 제어 등)
	useModal({ isOpen, onClose });

	if (!isOpen) return null;

	return (
		<ModalPortal>
			<div
				className="fixed inset-0 z-50 flex items-center justify-center"
				role="dialog"
				aria-modal="true"
			>
				<ModalOverlay
					onClose={onClose}
					className="bg-black-750 backdrop-blur-sm"
				/>
				<div className="w-full max-w-[48rem] relative animate-modalSlideIn rounded-[24px] border border-gray-800 bg-[rgba(18,24,41,0.80)] backdrop-blur-[20px] py-[8rem] px-[4rem]">
					<IconButton
						icon={<Image src="/icons/close.svg" alt="닫기" width={24} height={24} />}
						label="모달 닫기"
						onClick={onClose}
						className="absolute top-4 right-4 z-10"
						color="white"
					/>
					{children}
				</div>
			</div>
		</ModalPortal>
	);
};

export default BaseModal;