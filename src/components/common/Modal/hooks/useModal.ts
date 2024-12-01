import { useEffect, useCallback } from "react";

interface UseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * 모달 관련 공통 로직을 관리하는 커스텀 훅
 *
 * 기능:
 * 1. 스크롤 제어:
 *    - 모달 오픈 시 배경 스크롤 방지
 *    - 모달 닫힐 때 스크롤 복구
 *
 * 2. 키보드 접근성:
 *    - ESC 키로 모달 닫기 지원
 *    - 이벤트 리스너 자동 정리
 *
 * 사용예시:
 * const MyModal = () => {
 *   useModal({ isOpen, onClose });
 *   return ...;
 * };
 */
export const useModal = ({ isOpen, onClose }: UseModalProps) => {
	const handleEscape = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") onClose();
	}, [onClose]);

	// 스크롤 제어
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = "unset";
			};
		}
	}, [isOpen]);

	// 키보드 이벤트
	useEffect(() => {
		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			return () => {
				document.removeEventListener("keydown", handleEscape);
			};
		}
	}, [isOpen, handleEscape]);
};