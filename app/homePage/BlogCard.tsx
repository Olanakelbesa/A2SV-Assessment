"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { Blog } from "@/Types/types";
import defaultImg from "@/public/user.png"; // Import the default image

interface BlogCardProps {
	blogs: Blog[];
}

const BlogCard: React.FC<BlogCardProps> = ({ blogs }) => {
	const router = useRouter(); // Initialize useRouter

	const handleBlogClick = (id: string) => {
		router.push(`/blogs/${id}`); // Navigate to the blog details page with ID
	};

	const handleImageError = (
		event: React.SyntheticEvent<HTMLImageElement, Event>
	) => {
		event.currentTarget.src = defaultImg.src; // Use the default image on error
	};

	return (
		<div className="flex flex-col">
			{blogs.map((blog) => (
				<div
					key={blog._id}
					className="flex justify-center pt-2 cursor-pointer" // Add cursor-pointer for clickable area
					onClick={() => handleBlogClick(blog._id)} // Add click handler
				>
					<div className="w-[70%] border-t-2 border-solid border-gray-400 border-opacity-30">
						<div className="profile flex gap-2 py-8">
							<div>
								<Image
									src={blog.author?.image || defaultImg} // Use default image if author image is missing
									alt="author"
									width={40}
									height={40}
									onError={handleImageError}
									className="rounded-xl"
								/>
							</div>
							<div>
								<div>
									<h1 className="font-semibold text-xl">
										{blog.author?.name || "Unknown Author"}
									</h1>
								</div>
								<div>
									<p className="text-gray-400 text-xs">
										{blog.author?.role || "Unknown Role"}
									</p>
								</div>
							</div>
							<div className="text-gray-400 text-xs pt-2">
								{new Date(blog.createdAt).toLocaleDateString()}
							</div>
						</div>
						<div className="flex w-full">
							<div className="w-[67%]">
								<div className="font-bold text-xl">
									<h1>{blog.title}</h1>
								</div>
								<div>
									<p className="text-gray-400 text-sm py-4 pr-16">
										{blog.description}
									</p>
								</div>
							</div>
							<div>
								<Image
									src={blog.image || defaultImg} // Use default image if blog image is missing
									alt="blog-image"
									width={300}
									height={400}
									onError={handleImageError}
									className="rounded-xl"
								/>
							</div>
						</div>
						<div className="py-2 flex gap-3">
							{blog.skills.length > 0 ? (
								blog.skills.map((skill, index) => (
									<button
										key={index}
										className="bg-[#F5F5F5] text-[#8E8E8E] rounded-full py-1 px-4"
									>
										{skill}
									</button>
								))
							) : (
								<p className="text-gray-400 text-sm">No skills listed</p>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogCard;
