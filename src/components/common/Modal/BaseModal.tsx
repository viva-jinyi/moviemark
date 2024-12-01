'use client';

import ModalPortal from './ModalPortal';
import ModalOverlay from './ModalOverlay';
import { useModal } from './hooks/useModal';
import { BaseModalProps } from '@/types/modal';

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
        <ModalOverlay onClose={onClose} />
        <div className="relative">
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default BaseModal;