import { AUTH_KEYS } from "@/constants/auth";
import type { AuthResponse, DecodedToken } from "@/types/auth";
import { setCookie, removeCookie } from "@/utils/cookie";
import { decodeJwt } from "@/utils/decodeJwt";

export const saveAuthTokens = async (response: AuthResponse) => {
	if (response.access_token) {
		setCookie(AUTH_KEYS.ACCESS_TOKEN, response.access_token, {
			expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24시간
		});

		const decodedToken = decodeJwt<DecodedToken>(response.access_token);
		if (decodedToken) {
			setCookie(AUTH_KEYS.USER, JSON.stringify(decodedToken));
		}
	}

	if (response.refresh_token) {
		setCookie(AUTH_KEYS.REFRESH_TOKEN, response.refresh_token, {
			expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7일
		});
	}
};

export const removeAuthTokens = () => {
	removeCookie(AUTH_KEYS.ACCESS_TOKEN);
	removeCookie(AUTH_KEYS.REFRESH_TOKEN);
	removeCookie(AUTH_KEYS.USER);
};