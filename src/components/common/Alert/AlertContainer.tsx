'use client';

import { useAlertContext } from '../../../providers/AlertProvider';
import AlertItem from './AlertItem';

/**
 * Alert 컨테이너 컴포넌트
 * 
 * 특징:
 * 1. 포지셔닝: 화면 상단에 고정
 * 2. 스택 구조: 여러 Alert을 순차적으로 표시
 * 3. 반응형: 모바일 환경에서도 적절한 여백 유지
 */
const AlertContainer = () => {
  const { alerts } = useAlertContext();

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-4">
      {alerts.map(alert => (
        <AlertItem key={alert.id} {...alert} />
      ))}
    </div>
  );
};

export default AlertContainer; 