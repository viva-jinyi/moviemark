'use client';

import { useToastMessageContext } from "@/providers/ToastMessageProvider";

export default function ToastMessageButton() {
  const { showToastMessage } = useToastMessageContext();

  const handleClick = () => {
    showToastMessage({type: 'success', message: '성공'});
  };

  return (
    <button 
      onClick={handleClick}
    >
      <span className="text-white">알림 표시</span>
    </button>
  );
}
