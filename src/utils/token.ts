import { AUTH_KEYS } from "@/constants/auth";
import type { AuthResponse } from "@/types/auth";
import { setCookie, removeCookie } from "@/utils/cookie";

export const saveTokensToCookie = async (response: AuthResponse) => {
	if (response.access_token) {
		setCookie(AUTH_KEYS.ACCESS_TOKEN, response.access_token, {
			expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24시간
		});
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
};