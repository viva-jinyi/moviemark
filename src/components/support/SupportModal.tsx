'use client';  // 필수: Portal, DOM 조작, 이벤트 핸들링 때문

import BaseModal from '@/components/common/Modal/BaseModal';

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
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="w-[40rem] rounded-2xl bg-gray-800 p-8 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-heading-4 text-white">
            Please write down any inconveniences
          </h2>
        </div>
        <input
          type="text"
          placeholder="Title"
          className="w-full h-[5.6rem] px-4 rounded-xl bg-gray-700 text-body text-white
            placeholder:text-gray-300 border-none outline-none
            focus:ring-2 focus:ring-primary transition-all"
        />
        <button
          onClick={onClose}
          className="w-full h-[5.6rem] mt-8 rounded-xl bg-primary
            text-body font-medium text-white
            hover:bg-primary-400 active:bg-primary-600
            transition-colors duration-200"
        >
          Suggest
        </button>
      </div>
    </BaseModal>
  );
};

export default SupportModal;