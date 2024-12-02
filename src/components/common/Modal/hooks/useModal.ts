/**
 * Modal Hook - 모달 창을 쉽게 관리하기 위한 도구
 * 
 * 두 가지 사용 방법이 있어요:
 * 
 * 1. 훅이 직접 모달을 관리하는 방법
 *    - 모달 열고 닫는 것을 훅이 알아서 처리
 *    - 간단한 확인/취소 모달에 좋음
 *    예시: const { isOpen, onClose } = useModal()
 * 
 * 2. 부모 컴포넌트가 모달을 관리하는 방법
 *    - 모달 상태를 부모가 가지고 있음
 *    - 여러 상태가 얽혀있을 때 좋음 (예: 폼 작성 중인 모달)
 *    예시: useModal({ isOpen, onClose })
 * 
 * 왜 이렇게 나눴나요?
 * - 간단한 모달은 간단하게 쓰고 싶어서
 * - 복잡한 모달은 더 많은 제어가 필요해서
 * - 재사용성을 높이기 위해서
 */

import { useState, useEffect } from 'react';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const useModal = (props?: ModalProps) => {
  // 모달 상태 관리
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  // 부모가 상태를 주는지 확인
  const isControlled = props?.isOpen !== undefined;
  
  // 실제 사용할 상태 결정
  const isOpen = isControlled ? props.isOpen : internalIsOpen;

  // 모달이 열리면 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // 모달 닫기 함수
  const onClose = () => {
    if (isControlled) {
      // 부모가 관리하면 부모한테 알리기
      props.onClose?.();
    } else {
      // 직접 관리하면 직접 닫기
      setInternalIsOpen(false);
    }
  };

  return {
    isOpen,
    onClose,
    onOpen: () => setInternalIsOpen(true)
  };
}; 