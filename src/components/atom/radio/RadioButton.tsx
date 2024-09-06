import classNames from "classnames";
import { ChangeEvent, FC } from "react";

import styles from "./styles.module.scss";

import type { IRadioButton } from "./types";

const RadioButton: FC<IRadioButton> = ({
	value,
	label,
	onChange,
	checked,
	disabled,
}) => {
	const handleChange = (value: string) => {
		onChange(value);
	};
	return (
		<div className={classNames(styles.radio, disabled && styles.disabled)}>
			<input
				disabled={disabled}
				type="radio"
				id={value}
				value={value}
				checked={checked}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					handleChange(e.target.value)
				}
			/>
			<label htmlFor={value}>{label}</label>
		</div>
	);
};
export default RadioButton;
