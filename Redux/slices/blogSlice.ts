// src/Redux/blogSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogData } from "@/Types/types";
import { relatedBlogs } from "@/data/mockData"; // Adjust the path if necessary

const initialState: BlogData = relatedBlogs;

const blogSlice = createSlice({
	name: "blog",
	initialState,
	reducers: {
		setBlogs(state, action: PayloadAction<BlogData>) {
			return action.payload;
		},
	},
});

export const { setBlogs } = blogSlice.actions;
export default blogSlice.reducer;
