import type { ChangeEvent, RefObject, KeyboardEvent, MouseEvent } from "react";


export interface IInput {
	placeholder?: string;
	error?: boolean;
	errorText?: string;
	disabled?: boolean;
	inputType?: "text" | "number" | "password";
	customClass?: string;
	label?: string;
	ref?: RefObject<HTMLInputElement>;
	isRequired?: boolean;
	color?: "primary" | "white";
	maxLength?: number;
	minLength?: number;
	readOnly?: boolean;


	onBlur?(data: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;

	onFocus?(data: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;

	onKeyDown?(data: KeyboardEvent): void;

	value: string | number | undefined;
	name: string;

	onChange(data: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;

	onClick?(data: MouseEvent<HTMLInputElement | HTMLTextAreaElement>): void;

}
