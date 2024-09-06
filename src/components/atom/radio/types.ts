export interface IRadioButton {
	label?: string;
	value: string;
	checked: boolean;
	onChange: (value: string) => void;
	disabled?: boolean;
}
