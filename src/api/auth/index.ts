import { client } from '../client';
import { AuthCredentials, AuthResponse, DecodedToken } from './types';
import { decodeJwt } from './utils';

/**
 * 로그인 API
 */
export const login = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  const response = await client<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });

  // 토큰 저장
  if (response.access_token) {
    localStorage.setItem('accessToken', response.access_token);

    // JWT 디코딩하여 유저 정보 저장
    const decodedToken = decodeJwt<DecodedToken>(response.access_token);
    if (decodedToken) {
      localStorage.setItem('user', JSON.stringify(decodedToken));
    }
  }
  if (response.refresh_token) {
    localStorage.setItem('refreshToken', response.refresh_token);
  }

  return response;
};

/**
 * 현재 로그인한 유저 정보 가져오기
 */
export const getCurrentUser = (): DecodedToken | null => {
  const token = localStorage.getItem('accessToken');
  if (!token) return null;

  const decodedToken = decodeJwt<DecodedToken>(token);
  return decodedToken;
};

/**
 * 토큰 유효성 검사
 */
export const isTokenValid = (): boolean => {
  const token = localStorage.getItem('accessToken');
  if (!token) return false;

  const decodedToken = decodeJwt<DecodedToken>(token);
  if (!decodedToken) return false;

  // 토큰 만료 시간 체크
  return decodedToken.exp * 1000 > Date.now();
};

/**
 * 회원가입 API
 *
 * @param credentials - 이메일과 비밀번호
 * @returns 인증 토큰과 사용자 정보
 */
export const signup = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  return client<AuthResponse>('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });
};

/**
 * 로그아웃
 */
export const logout = () => {
  localStorage.removeItem('accessToken');
};