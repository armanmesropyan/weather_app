import { type CSSProperties } from "react";


export type TButtonProps = {
	size: "big" | "small";
	text: string;
	theme: "primary" | "secondary" | "fill";
	disabled?: boolean;
	width?: string;
	height?: string;
	active?: boolean;
	onClick?: () => void;
	isLoading?: boolean;
	style?: CSSProperties;
};
