import { useAppDispatch } from "@/hooks/redux";
import useDynamicQuery from "@/hooks/useUrlSync";
import useValidations from "@/hooks/useValidation";
import { setUntil } from "@/store/reducers/weather-reducer/weather.slice";
import {
	getCurrentWeatherThunk,
	getDailyWeatherThunk,
} from "@/store/reducers/weather-reducer/weather.thunk";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";

const useHeader = () => {
	const dispatch = useAppDispatch();
	const [searchValue, setSearchValue] = useState<string>("");

	const [switchValue, setSwitchValue] = useState<string>("");

	const { options, setOptions } = useDynamicQuery();
	const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
	const [errorData, setErrorData] = useState<Record<string, string>>({
		search: "",
		switch: "",
	});
	const { isEmpty } = useValidations();

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchValue(value);
		setErrorData({ ...errorData, search: "" });
	};

	const validation = () => {
		let isValid = true;
		let errors = { ...errorData };
		if (isEmpty(searchValue)) {
			isValid = false;
			errors.search = "Please enter a valid search value";
		}
		if (isEmpty(switchValue)) {
			isValid = false;
			errors.switch = "Please choose any method";
		}
		setErrorData(errors);
		return isValid;
	};

	const handleSubmit = async () => {
		setIsInitialLoading(false);
		if (validation()) {
			dispatch(setUntil(switchValue));
			setOptions({ search: searchValue, switch: switchValue });
			await dispatch(
				getCurrentWeatherThunk({ country: searchValue, units: switchValue })
			);
			await dispatch(
				getDailyWeatherThunk({ country: searchValue, units: switchValue })
			);
		}
	};
	const handleSwitch = async (value: string) => {
		setSwitchValue(value);
		setErrorData({ ...errorData, switch: "" });
		dispatch(setUntil(value));
		await dispatch(
			getCurrentWeatherThunk({ country: searchValue, units: value })
		);
		await dispatch(
			getDailyWeatherThunk({ country: searchValue, units: value })
		);
	};

	useEffect(() => {
		if (options.search) {
			setSearchValue(options.search);
		}
		if (options.switch) {
			setSwitchValue(options.switch);
			dispatch(setUntil(options.switch));
		}
		if (isInitialLoading && options.switch && options.search) {
			dispatch(
				getCurrentWeatherThunk({
					country: options?.search,
					units: options?.switch,
				})
			);
			dispatch(
				getDailyWeatherThunk({
					country: options?.search,
					units: options?.switch,
				})
			);
		}
	}, [options]);

	const dependencies = [searchValue, errorData, switchValue];
	return useMemo(
		() => ({
			handleSubmit,
			handleSearch,
			searchValue,
			errorData,
			switchValue,
			handleSwitch,
		}),
		[...dependencies]
	);
};

export default useHeader;
