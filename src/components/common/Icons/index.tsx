import Image from "next/image";

interface IconProps {
  className?: string;
}

export const EmailIcon = ({ className }: IconProps) => {
	return (
		<Image
			src="/icons/email.svg"
			alt="이메일 아이콘"
			width={24}
			height={24}
			className={className}
			priority
		/>
	);
};

export const LockIcon = ({ className }: IconProps) => {
	return (
		<Image
			src="/icons/key.svg"
			alt="비밀번호 아이콘"
			width={24}
			height={24}
			className={className}
			priority
		/>
	);
};

export const EyeIcon = ({ className }: IconProps) => {
	return (
		<Image
			src="/icons/eye.svg"
			alt="비밀번호 보기"
			width={24}
			height={24}
			className={className}
			priority
		/>
	);
};