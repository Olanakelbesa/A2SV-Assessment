"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams from next/navigation
import Image from "next/image";
import { TailSpin } from "react-loader-spinner";
import defaultImg from "@/public/user.png";

const BlogDescription = () => {
	const { id } = useParams(); // Get the blog ID from the URL

	const [blog, setBlog] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBlogData = async () => {
			if (id) {
				try {
					const response = await fetch(
						`https://a2sv-backend.onrender.com/api/blogs/${id}`
					);
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await response.json();
					setBlog(data);
				} catch (error) {
					console.error("Error fetching blog data:", error);
				} finally {
					setLoading(false);
				}
			}
		};

		fetchBlogData();
	}, [id]);

	console.log("blogggggggg", blog);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-[50vh]">
				<TailSpin height="80" width="80" color="#264FAD" ariaLabel="loading" />
			</div>
		);
	}

	if (!blog) {
		return <div>Blog not found.</div>;
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="p-8  w-[70%]">
				<h1 className="text-3xl font-bold">{blog.title}</h1>
				<div className="flex items-center gap-4 my-4">
					<Image
						src={blog.author?.image || defaultImg}
						alt="Author"
						width={40}
						height={40}
						className="rounded-full"
					/>
					<div>
						<p className="font-semibold">
							{blog.author?.name || "Unknown Author"}
						</p>
						<p className="text-sm text-gray-500">
							{blog.author?.role || "Unknown Role"}
						</p>
					</div>
				</div>
				<Image
					src={blog.image || defaultImg}
					alt="Blog Image"
					width={600}
					height={400}
					className="rounded-lg"
				/>
				<div className="my-6 text-lg">
					<p>{blog.description}</p>
				</div>
				<div className="flex gap-3">
					{blog.skills.map((skill: string, index: number) => (
						<span key={index} className="bg-gray-200 px-4 py-1 rounded-full">
							{skill}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogDescription;
