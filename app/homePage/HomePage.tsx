"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import BlogCard from "./BlogCard";
import { BlogData, Blog } from "@/Types/types";
import { TailSpin } from "react-loader-spinner"; // Import a loading spinner component

const HomePage = () => {
	const [blogData, setBlogData] = useState<BlogData>([]);
	const [loading, setLoading] = useState(true); // Add loading state
	const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

	useEffect(() => {
		const fetchBlogData = async () => {
			setLoading(true); // Set loading to true before fetching
			try {
				const response = await fetch(
					"https://a2sv-backend.onrender.com/api/blogs"
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data: BlogData = await response.json();
				setBlogData(data);
			} catch (error) {
				console.error("Error fetching blog data:", error);
			} finally {
				setLoading(false); // Set loading to false after fetching
			}
		};

		fetchBlogData();
	}, []);

	const handleBlogClick = (id: string) => {
		setSelectedBlogId(id);
	};

	// Slice the blogData array to include only the first 5 blogs
	const blogsToShow = blogData.slice(0, 5);
	return (
		<div>
			<Header />
			<div className="pt-8">
				{loading ? (
					<div className="flex justify-center items-center h-[50vh]">
						<TailSpin
							height="80"
							width="80"
							color="#264FAD"
							ariaLabel="tail-spin-loading"
							radius="2"
							wrapperStyle={{}}
							wrapperClass=""
						/>
					</div>
				) : (
					<BlogCard blogs={blogsToShow} />
				)}
			</div>
		</div>
	);
};

export default HomePage;
