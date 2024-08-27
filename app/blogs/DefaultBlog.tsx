import Image from "next/image";
import React from "react";
import rectImg from "@/public/blogImg.png";
import userImg from "@/public/user.png";
import RelatedBlogs from "./RelatedBlogs";

const DefaultBlog = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="  w-[70%]">
				<div className="flex flex-col justify-center items-center py-5 pb-10">
					<div className="text-center">
						<p className="text-[25px]">
							The essential guide to Competitive Programming
						</p>
						<p className="text-sm py-2 text-gray-500 ">
							PROGRAMMING, TECH | 6 MIN READ
						</p>
					</div>
					<div className="py-6">
						<Image src={rectImg} alt="rect" width={800} height={800} />
					</div>
					<div className="profile flex flex-col items-center py-3">
						<div className="pr-10">
							<Image
								src={userImg}
								alt="user"
								width={40}
								height={40}
								className="rounded-full"
							/>
						</div>

						<div className="flex py-2 gap-2 text-sm">
							<div>
								<p>CHALTU KEBEDE</p>
							</div>
							<div>|</div>
							<div>
								{" "}
								<p>SOFTWARE ENGINEER</p>
							</div>
						</div>
						<div className="text-sm font-semibold  text-[#264FAD]">
							<p>@CHALTU_KEBEDE</p>
						</div>
					</div>
					<div className="w-[70%] flex flex-col gap-10 py-10">
						<div className="title ">
							<h1 className="font-semibold text-[18px]">
								We know that data structure and algorithm can seem hard at first
								glance. And you may not be familiar with advanced algorithms,
								but there are simple steps you can follow to see outstanding
								results in a short period of time.
							</h1>
						</div>
						<div className="flex flex-col gap-10">
							<div>
								<p className="text-sm text-[#737373]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
							<div>
								<p className="text-sm text-[#737373]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
							<div>
								<p className="text-sm text-[#737373]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="pb-5">
						<p className="font-semibold text-[18px]">Related Blogs</p>
					</div>
					<div className="flex gap-10">
						<RelatedBlogs />
						<RelatedBlogs />
						<RelatedBlogs />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DefaultBlog;
