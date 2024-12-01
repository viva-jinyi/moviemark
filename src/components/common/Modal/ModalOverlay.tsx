import { type ModalOverlayProps } from './types/modal.types';

// 모달 외부 클릭 시 닫기를 위한 오버레이 컴포넌트
const ModalOverlay = ({ onClose }: ModalOverlayProps) => (
  <div 
    className="fixed inset-0 bg-black/40 backdrop-blur-sm"
    onClick={onClose}
    aria-hidden="true"
  />
);

export default ModalOverlay; 