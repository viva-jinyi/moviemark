import { AuthError, LoginCredentials, LoginResponse } from "@/types/auth";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

/**
 * 로그인 API 호출
 *
 * @throws {AuthError} 로그인 실패 시 에러
 */
export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: 'include', // 쿠키 포함
    });

    if (!response.ok) {
      const error = await response.json();
      const authError = new Error(error.message || '로그인에 실패했습니다.') as AuthError;
      authError.code = error.code;
      authError.statusCode = response.status;
      throw authError;
    }

    const data = await response.json();

    // 토큰 저장
    localStorage.setItem('accessToken', data.accessToken);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('로그인 중 오류가 발생했습니다.');
  }
};

/**
 * 로그아웃
 */
export const logout = async (): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('로그아웃에 실패했습니다.');
    }

    localStorage.removeItem('accessToken');
  } catch (error) {
    console.error('로그아웃 중 오류 발생:', error);
    throw error;
  }
};

/**
 * 현재 인증 상태 확인
 */
export const checkAuth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/check`, {
      credentials: 'include',
    });

    return response.ok;
  } catch {
    return false;
  }
};