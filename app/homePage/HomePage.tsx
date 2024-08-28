"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import Header from "./Header";
import BlogCard from "./BlogCard";
import { TailSpin } from "react-loader-spinner";

const HomePage = () => {
	// Use Redux state instead of local state
	const blogData = useSelector((state: RootState) => state.blogs);
	const loading = false; // Since mock data is already available

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
