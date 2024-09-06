import type { ActionReducerMapBuilder, AsyncThunk, Draft } from "@reduxjs/toolkit";

export interface RequestStateProperty<T = unknown, E = unknown> {
	data: T | null;
	error: E | null;
	isLoading: boolean;
}

export const makeRequestStateProperty = <T, E>(
	initialValues: Partial<RequestStateProperty<T, E>> = {},
): RequestStateProperty<T, E> => ({
	data: null,
	error: null,
	isLoading: false,
	...initialValues,
});

export type RequestList<I> = {
	[K in keyof I as I[K] extends RequestStateProperty ? K : never]: I[K];
};

export const makeRequestExtraReducer = <
	IS extends Record<string, RequestStateProperty>,
>(
	builder: ActionReducerMapBuilder<IS>,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	asyncThunk: AsyncThunk<any, any, any>,
	requestsPropertyName: keyof Draft<IS>,
): void => {
	builder
		.addCase(asyncThunk.pending, (state) => {
			state[requestsPropertyName].isLoading = true;
			state[requestsPropertyName].error = null;
		})
		.addCase(asyncThunk.fulfilled, (state, action) => {
			state[requestsPropertyName].isLoading = false;
			state[requestsPropertyName].data = action.payload;
		})
		.addCase(asyncThunk.rejected, (state, action) => {
			state[requestsPropertyName].isLoading = false;
			state[requestsPropertyName].error = action.payload;
		});
};
