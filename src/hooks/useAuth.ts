import { useState } from "react";

import { login, signup, logout } from "@/api/auth";
import type { AuthCredentials } from "@/api/auth/types";
import { useToastMessageContext } from "@/providers/ToastMessageProvider";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showToastMessage } = useToastMessageContext();

  const handleLogin = async (credentials: AuthCredentials) => {
    setIsLoading(true);
    try {
      const response = await login(credentials);
      showToastMessage({ type: "success", message: "로그인 성공!" });
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "로그인 실패";
      showToastMessage({ type: "error", message: errorMessage });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (credentials: AuthCredentials) => {
    setIsLoading(true);
    try {
      const response = await signup(credentials);
      showToastMessage({ type: "success", message: "회원가입 성공!" });
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "회원가입 실패";
      showToastMessage({ type: "error", message: errorMessage });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    showToastMessage({ type: "info", message: "로그아웃 되었습니다." });
  };

  return {
    isLoading,
    login: handleLogin,
    signup: handleSignup,
    logout: handleLogout,
  };
};