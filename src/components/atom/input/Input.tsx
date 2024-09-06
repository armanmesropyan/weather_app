"use client";

import classNames from "classnames";
import React, { type FC, useEffect, useState } from "react";

import { type IInput } from "./types";
import styles from "./styles.module.scss";

const Input: FC<IInput> = ({
	inputType = "text",
	value,
	placeholder = "",
	name,
	error,
	errorText,
	disabled,
	onChange,
	onFocus,
	onBlur,
	onClick,
	label,
	ref,
	onKeyDown,
	isRequired,
	maxLength,
	minLength,
	readOnly,
}) => {
	const [inputValue, setInputValue] = useState<string | number | undefined>(
		(value ?? value === 0) ? 0 : ""
	);

	function onChangeInput(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		e.preventDefault();
		setInputValue(e.target.value);
		onChange(e);
	}

	useEffect(() => {
		if (value || value === 0) {
			setInputValue(value);
		} else {
			setInputValue("");
		}
	}, [value]);

	function onBlurInput(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		onBlur && onBlur(e);
	}

	function onFocusInput(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		onFocus && onFocus(e);
	}

	const handlerClick = (data: React.MouseEvent<HTMLInputElement>) => {
		onClick && onClick(data);
	};

	return (
		<div
			className={classNames(
				styles.input,
				error && styles.error,
				disabled && styles.disabled
			)}
			onClick={handlerClick}
		>
			{label && (
				<p className={styles.input__label}>
					{label}
					{isRequired && <span>*</span>}
				</p>
			)}
			<div className={styles.input__box}>
				<label>
					<input
						readOnly={readOnly}
						aria-label="input"
						ref={ref}
						name={name}
						placeholder={placeholder}
						value={inputValue}
						disabled={disabled}
						autoComplete={"off"}
						onChange={onChangeInput}
						onBlur={onBlurInput}
						onFocus={onFocusInput}
						onKeyDown={onKeyDown}
						maxLength={maxLength}
						minLength={minLength}
						pattern={inputType === "number" ? "[0-9]*" : ""}
					/>
				</label>
			</div>
			{error && errorText && (
				<p className={styles.input__error_text}>{errorText}</p>
			)}
		</div>
	);
};

export default Input;
