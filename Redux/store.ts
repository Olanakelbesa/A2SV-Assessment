// store.ts
import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slices/blogSlice";

export const store = configureStore({
	reducer: {
		blogs: blogReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
