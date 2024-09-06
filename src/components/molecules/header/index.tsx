import React, { memo } from "react";
import {
	ButtonComponent,
	InputComponent,
	RadioComponent,
} from "@/components/atom";
import useHeader from "./useHeader";
import styles from "./styles.module.scss";

const Header = () => {
	const {
		handleSubmit,
		handleSearch,
		handleSwitch,
		searchValue,
		errorData,
		switchValue,
	} = useHeader();
	return (
		<header className={styles.header}>
			<div className={styles.header__form}>
				<figure className={styles.header__form__input}>
					<InputComponent
						value={searchValue}
						name={"weather"}
						onChange={handleSearch}
						error={!!errorData.search}
						errorText={errorData.search}
					/>
				</figure>
				<div>
					<ButtonComponent
						size="small"
						text="Search City"
						onClick={handleSubmit}
						theme="primary"
					/>
				</div>
			</div>
			<div className={styles.header__switcher}>
				<div className={styles.header__switcher__wrapper}>
					<div className={styles.header__switcher__child}>
						<RadioComponent
							label="°C"
							value={"metric"}
							checked={switchValue === "metric"}
							onChange={handleSwitch}
						/>
					</div>
					<div className={styles.header__switcher__child}>
						<RadioComponent
							label="°F"
							value={"imperial"}
							checked={switchValue === "imperial"}
							onChange={handleSwitch}
						/>
					</div>
				</div>
				{!!errorData.switch && (
					<p className={styles.header__switcher__error_text}>
						{errorData.switch}
					</p>
				)}
			</div>
		</header>
	);
};

export default memo(Header);
