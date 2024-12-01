import { AuthError } from "@/types/auth";

export const getAuthErrorMessage = (error: AuthError): string => {
  switch (error.code) {
    case 'auth/invalid-email':
      return '유효하지 않은 이메일입니다.';
    case 'auth/user-disabled':
      return '비활성화된 계정입니다.';
    case 'auth/user-not-found':
      return '등록되지 않은 이메일입니다.';
    case 'auth/wrong-password':
      return '잘못된 비밀번호입니다.';
    case 'auth/too-many-requests':
      return '너무 많은 로그인 시도가 있었습니다. 잠시 후 다시 시도해주세요.';
    default:
      return error.message || '로그인에 실패했습니다.';
  }
}; 