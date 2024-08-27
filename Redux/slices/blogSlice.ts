// slices/blogSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Blog {
	_id: string;
	title: string;
	description: string;
	author: {
		name: string;
		image: string;
	};
	image: string;
	skills: string[];
	createdAt: string;
}

interface BlogState {
	blogs: Blog[];
	selectedBlog: Blog | null;
	loading: boolean;
	error: string | null;
}

const initialState: BlogState = {
	blogs: [],
	selectedBlog: null,
	loading: false,
	error: null,
};

// Async thunk for fetching blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
	const response = await fetch("https://a2sv-backend.onrender.com/api/blogs");
	if (!response.ok) {
		throw new Error("Failed to fetch");
	}
	return response.json();
});

// Async thunk for fetching a single blog
export const fetchBlogById = createAsyncThunk(
	"blogs/fetchBlogById",
	async (id: string) => {
		const response = await fetch(
			`https://a2sv-backend.onrender.com/api/blogs/${id}`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch");
		}
		return response.json();
	}
);

const blogSlice = createSlice({
	name: "blogs",
	initialState,
	reducers: {
		setSelectedBlog: (state, action) => {
			state.selectedBlog = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBlogs.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchBlogs.fulfilled, (state, action) => {
				state.blogs = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchBlogs.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Failed to fetch";
			})
			.addCase(fetchBlogById.fulfilled, (state, action) => {
				state.selectedBlog = action.payload;
			});
	},
});

export const { setSelectedBlog } = blogSlice.actions;

export default blogSlice.reducer;
