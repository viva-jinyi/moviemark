"use client";

import BaseButton from "@/components/common/Button/BaseButton";
import { useTheme } from "@/providers/ThemeProvider.";

export default function ThemePage() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div>
			<BaseButton
				size="full"
				variant="filled"
				color="primary"
				onClick={toggleTheme}
			>
				{theme === "dark" ? "라이트 모드로 바꾸기" : "다크모드로 바꾸기"}
			</BaseButton>
		</div>
	);
}
