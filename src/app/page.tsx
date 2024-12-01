'use client';

import { useAlertContext } from "@/providers/AlertProvider";

export default function AlertButton() {
  const { showAlert } = useAlertContext();

  const handleClick = () => {
    showAlert({type: 'success', message: '성공'});
  };

  return (
    <button 
      onClick={handleClick}
    >
      <span className="text-white">알림 표시</span>
    </button>
  );
}
