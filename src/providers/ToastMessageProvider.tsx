"use client";

import { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";

import { type ToastMessageProps, type ToastMessageContextType } from "@/types/toastMessage";

const ToastMessageContext = createContext<ToastMessageContextType | null>(null);

/**
 * ToastMessage 상태 관리 Provider
 *
 * useRef + Set을 사용하는 이유:
 * 1. useRef:
 *    - React에서 값을 "기억"하는 상자라고 생각하면 됨
 *    - useState와 달리 값이 변해도 화면이 다시 그려지지 않음
 *    - 컴포넌트가 리렌더링되어도 이 값은 유지됨
 *
 * 2. Set:
 *    - JavaScript의 배열과 비슷하지만 중복을 허용하지 않는 특별한 배열
 *    - 여러 타이머를 관리할 때 유용함
 *    - add로 추가, delete로 제거가 매우 빠름
 *
 * 실제 사용 예시:
 * - ToastMessage가 사라질 때 타이머를 설정하는데, 이 타이머들을 useRef + Set으로 관리
 * - 컴포넌트가 사라질 때 실행 중인 모든 타이머를 한 번에 정리 가능
 */
export function ToastMessageProvider({ children }: { children: React.ReactNode }) {
	const [toastMessages, setToastMessages] = useState<ToastMessageProps[]>([]);
	const timeoutIds = useRef(new Set<NodeJS.Timeout>());

	// 컴포넌트가 사라질 때 실행 중인 모든 타이머 정리
	useEffect(() => {
		return () => {
			timeoutIds.current.forEach(id => clearTimeout(id));
		};
	}, []);

	const removeToastMessage = useCallback((id: string) => {
		setToastMessages(prev => prev.filter(toastMessage => toastMessage.id !== id));
	}, []);

	const showToastMessage = useCallback(({ message, type }: { message: string; type: ToastMessageProps["type"] }) => {
		const id = Math.random().toString(36).substring(7);

		if (toastMessages.some(toastMessage => toastMessage.message === message)) {
			return;
		}

		setToastMessages(prev => [...prev, { id, message, type }]);

		// 3초 후 자동으로 알림 제거하는 타이머 설정
		const timeoutId = setTimeout(() => {
			removeToastMessage(id);
			timeoutIds.current.delete(timeoutId); // 타이머 제거
		}, 3000);

		timeoutIds.current.add(timeoutId); // 새로운 타이머 추가
	}, [toastMessages, removeToastMessage]);

	return (
		<ToastMessageContext.Provider value={{ toastMessages, showToastMessage, removeToastMessage }}>
			{children}
		</ToastMessageContext.Provider>
	);
}

export const useToastMessageContext = () => {
	const context = useContext(ToastMessageContext);
	if (!context) {
		throw new Error("useToastMessageContext must be used within ToastMessageProvider");
	}
	return context;
};