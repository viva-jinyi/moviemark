import { forwardRef, memo } from "react";

import { BaseInputProps } from "@/types/input";

const BaseInput = memo(forwardRef<HTMLInputElement, BaseInputProps>(({
	icon,
	error,
	helper,
	label,
	required,
	size = "md",
	variant = "filled",
	validationState = "default",
	fullWidth = true,
	className,
	containerClassName,
	disabled,
	rightElement,
	...props
}, ref) => {
	const getInputStyles = () => {
		const baseStyles = `
      w-full
      bg-gray-800
      text-white
      text-body
      rounded-2xl
      transition-all
      duration-200
      outline-none
      ${icon ? "pl-18" : "pl-10"}
      ${rightElement ? "pr-18" : "pr-10"}
    `;

		const sizeStyles = {
			sm: "h-[4.8rem]",
			md: "h-[5.6rem]",
			lg: "h-[6.4rem]",
		}[size];

		const stateStyles = {
			default: "border-2 border-transparent focus:border-primary-500",
			invalid: "border-2 border-error-500",
			valid: "border-2 border-success-500",
		}[validationState];

		const variantStyles = {
			filled: "bg-gray-800",
			outlined: "bg-transparent border-2 border-gray-700",
		}[variant];

		const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

		return `${baseStyles} ${sizeStyles} ${stateStyles} ${variantStyles} ${disabledStyles} ${className || ""}`;
	};

	return (
		<div className={`relative ${fullWidth ? "w-full" : "w-auto"} ${containerClassName || ""}`}>
			{label && (
				<label className="block mb-2 text-body text-gray-300">
					{label}
					{required && <span className="text-error-500 ml-5">*</span>}
				</label>
			)}

			<div className="relative">
				{icon && (
					<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
						{icon}
					</div>
				)}

				<input
					ref={ref}
					disabled={disabled}
					className={getInputStyles()}
					{...props}
				/>

				{rightElement && (
					<div className="absolute right-4 top-1/2 -translate-y-1/2">
						{rightElement}
					</div>
				)}
			</div>

			{(error || helper) && (
				<p className={`mt-1 text-body-small ${error ? "text-error-500" : "text-gray-400"}`}>
					{error || helper}
				</p>
			)}
		</div>
	);
}));

BaseInput.displayName = "BaseInput";

export default BaseInput;