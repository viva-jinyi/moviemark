import { AlertProps } from "@/types/alert";

/**
 * 개별 Alert 컴포넌트
 * 
 * 특징:
 * 1. 접근성: role="alert" 적용으로 스크린리더 지원
 * 2. 애니메이션: 부드러운 등장/제거 효과
 * 3. 반응형: 모바일 환경 고려
 */
const AlertItem = ({ message, type }: AlertProps) => {
  const baseStyles = "flex items-center w-full max-w-[40rem] p-4 rounded-xl shadow-lg animate-slideIn";
  
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
      <span className="text-body font-medium">{message}</span>
    </div>
  );
};

export default AlertItem; 