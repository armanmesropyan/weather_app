"use client";

import { useEffect, useState } from "react";

export interface DynamicQueryOptions {
	[key: string]: string | undefined;
}

const useDynamicQuery = (initialOptions: DynamicQueryOptions = {}) => {
	const [options, setOptions] = useState<DynamicQueryOptions>(initialOptions);
	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const newOptions: DynamicQueryOptions = {};

		for (const [key, value] of urlSearchParams.entries()) {
			newOptions[key] = value;
		}

		setOptions(newOptions);
	}, []);

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		Object.entries(options).forEach(([key, value]) => {
			if (
				!value ||
				value.trim() === "" ||
				value.trim() === "null" ||
				value.trim() === "[]"
			) {
				urlSearchParams.delete(key);
			} else {
				urlSearchParams.set(key, value);
			}
		});

		const newUrl = `${window.location.pathname}${
			urlSearchParams.toString() ? `?${urlSearchParams.toString()}` : ""
		}`;
		window.history.replaceState({}, "", newUrl);
	}, [options]);

	return { options, setOptions };
};

export default useDynamicQuery;
