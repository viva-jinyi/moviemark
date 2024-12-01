'use client';

import Image from 'next/image';
import { useState } from 'react';
import SupportModal from '@/components/support/SupportModal';

/**
 * Footer 컴포넌트
 * 
 * 특징:
 * 1. 고정 위치: 우측 하단에 고정
 * 2. 호버 효과: 위로 살짝 떠오르는 애니메이션
 * 3. 모달 통합: 지원 버튼 클릭 시 모달 표시
 */
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="relative">
      <button
        type="button"
        className="fixed bottom-8 right-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        onClick={() => setIsModalOpen(true)}
        aria-label="고객 지원"
      >
        <Image 
          src="/icons/support.svg" 
          alt="고객 지원"
          width={50}
          height={50}
          className="drop-shadow-lg"
          priority={false}
          quality={90}
        />
      </button>
      <SupportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
