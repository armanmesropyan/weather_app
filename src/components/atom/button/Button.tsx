
import classNames from "classnames";
import React, { type FC } from "react";

import type { TButtonProps } from "./types";
import styles from "./styles.module.scss";

const Button: FC<TButtonProps> = ({
	size,
	theme,
	disabled,
	width,
	height,
	text,
	active,
	onClick,
	isLoading,
	style,
}) => {
	return (
		<button
			className={classNames(
				styles.button,
				styles[size],
				styles[theme],
				theme !== "primary" && active && styles.active,
				disabled && styles.disabled
			)}
			style={{ width, height, ...style }}
			onClick={onClick}
			disabled={disabled}
			aria-label={text ?? "button vacant"}
		>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<span className={styles.button__content}>
					<span
						className={classNames(
							styles.button__content__text,
							disabled && styles.slideDisabled
						)}
					>
						{text}
					</span>
				</span>
			)}
		</button>
	);
};
export default Button;
