import { type AlertProps } from '@/types/alert';
import { useAlertContext } from '@/providers/AlertProvider';
import Image from 'next/image';

/**
 * 개별 Alert 컴포넌트
 * 
 * 기술적 결정:
 * 1. 시각적 계층:
 *    - shadow-lg: 다른 UI 요소와의 분리감 강화
 *    - rounded-xl: 디자인 시스템의 일관된 곡률 적용
 * 
 * 2. 접근성:
 *    - role="alert": 스크린리더 사용자에게 중요 메시지 전달
 *    - aria-label: 닫기 버튼의 목적 명확화
 * 
 * 3. 애니메이션:
 *    - transform + opacity: GPU 가속 활용
 *    - tailwind.config의 keyframes 활용: 일관된 모션
 * 
 * 4. 색상 시스템:
 *    - 디자인 토큰 활용: error-500, success-500 등
 *    - 시맨틱 컬러로 상태 표현
 */
const AlertItem = ({ id, message, type }: AlertProps) => {
  const { removeAlert } = useAlertContext();
  
  const baseStyles = "flex items-center justify-between w-full p-4 shadow-lg rounded-xl animate-slideIn";
  
  const typeStyles = {
    error: "bg-error-500 text-white",
    success: "bg-success-500 text-white",
    info: "bg-info-500 text-white"
  };

  return (
    <div 
      role="alert"
      className={`${baseStyles} ${typeStyles[type]}`}
    >
      <span className="text-body font-medium pr-4">{message}</span>
      <button
        onClick={() => removeAlert(id)}
        className="p-1 hover:bg-black-200 rounded-lg transition-colors"
        aria-label="알림 닫기"
      >
        <Image 
          src="/icons/close.svg"
          alt="닫기"
          width={24}
          height={24}
          className="text-white"
        />
      </button>
    </div>
  );
};

export default AlertItem; 