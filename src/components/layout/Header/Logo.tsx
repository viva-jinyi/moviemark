"use client";
// Link 컴포넌트의 hover 이벤트와 같은 브라우저 이벤트를 사용하기 때문에
// Client Component로 선언합니다.
// Next.js 13+에서 모든 컴포넌트는 기본적으로 Server Component이며,
// 클라이언트 측 상호작용이 필요한 경우에만 'use client'를 사용합니다.

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href="/"
			className="inline-flex items-center hover:opacity-80 transition-opacity px-4"
			aria-label="홈으로 이동"
		>
			<div className="relative w-[4rem] h-[4rem]">
				<Image
					src="/images/logo.svg"
					alt="MovieMark 로고"
					fill
					priority
					sizes="40px"
					className="object-contain"
				/>
			</div>
		</Link>
	);
};

export default Logo;
