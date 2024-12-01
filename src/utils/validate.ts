const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_MIN_LENGTH = 8;

export const validateEmail = (email: string): string | undefined => {
	if (!email) {
		return "이메일을 입력해주세요.";
	}

	if (!EMAIL_REGEX.test(email)) {
		return "올바른 이메일 형식이 아닙니다.";
	}
};

export const validatePassword = (password: string): string | undefined => {
	if (!password) {
		return "비밀번호를 입력해주세요.";
	}

	if (password.length < PASSWORD_MIN_LENGTH) {
		return `비밀번호는 최소 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다.`;
	}

	if (!/[A-Z]/.test(password)) {
		return "대문자를 포함해야 합니다.";
	}

	if (!/[a-z]/.test(password)) {
		return "소문자를 포함해야 합니다.";
	}

	if (!/[0-9]/.test(password)) {
		return "숫자를 포함해야 합니다.";
	}

	if (!/[!@#$%^&*]/.test(password)) {
		return "특수문자(!@#$%^&*)를 포함해야 합니다.";
	}
};