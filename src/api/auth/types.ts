export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string
}

export interface AuthError extends Error {
  statusCode?: number;
  code?: string;
}

export interface DecodedToken {
  sub: string;        // 유저 ID
  email: string;      // 이메일
  name?: string;      // 이름
  exp: number;        // 만료 시간
  iat: number;        // 발급 시간
  // 기타 필요한 클레임들
}