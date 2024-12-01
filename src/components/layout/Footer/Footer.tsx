"use client";

import { useState } from "react";

import Image from "next/image";

import IconButton from "@/components/common/Button/IconButton";
import SupportModal from "@/components/support/SupportModal";

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
			<IconButton
				icon={
					<Image
						src="/icons/support.svg"
						alt="고객 지원"
						width={50}
						height={50}
						className="drop-shadow-lg"
						priority={false}
						quality={90}
					/>
				}
				className="fixed bottom-8 right-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
				label="고객 지원"
				variant="icon-round"
				onClick={() => setIsModalOpen(true)}
			/>
			<SupportModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</footer>
	);
};

export default Footer;
