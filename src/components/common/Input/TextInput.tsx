import { forwardRef } from "react";

import type { BaseInputProps } from "@/types/input";

import BaseInput from "./BaseInput";

export type TextInputProps = Omit<BaseInputProps, "type">;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
	return (
		<BaseInput
			type="text"
			ref={ref}
			{...props}
		/>
	);
});

TextInput.displayName = "TextInput";

export default TextInput;