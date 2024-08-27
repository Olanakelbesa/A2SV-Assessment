import Image from "next/image";
import React from "react";
import images from "@/public/Image.png";
import userImg from "@/public/user.png";
import likeIcon from "@/public/⭐️ Icon.png";

const RelatedBlogs = () => {
	return (
		<div className="w-[40%] shadow">
			<div>
				<Image src={images} alt="image" width={400} height={400} />
			</div>
			<div className="px-3 ">
				<div className="py-5">
					<p className="text-[#5E5873] font-semibold">
						Design Liberalized Exchange Rate Management
					</p>
				</div>
				<div className="flex items-center gap-2 text-[#B9B9C3]">
					<div>
						<Image src={userImg} alt="user" width={30} height={30} />
					</div>
					<div>
						<p className="">
							by{" "}
							<span className="text-[#6E6B7B] font-semibold">Fred Boone</span>
						</p>
					</div>
					<div>|</div>
					<div>Jan 10, 2020</div>
				</div>
				<div className="flex py-5 gap-3">
					<div className="bg-[#F5F5F5] text-[#8E8E8E] rounded-full py-1 px-4">
						UI/UX
					</div>
					<div className="bg-[#F5F5F5] text-[#8E8E8E] rounded-full py-1 px-4">
						DEVELOPMENT
					</div>
				</div>
				<div>
					<p className="text-sm text-[#6E6B7B] py-5">
						A little personality goes a long way, especially on a business blog.
						So don’t be afraid to let loose.
					</p>
				</div>
				<hr className="" />
				<div className="flex justify-between px-2 py-5">
					<div className="flex gap-1 items-center">
						<div>
							<Image src={likeIcon} alt="like" />
						</div>
						<div>2.3K Likes</div>
					</div>
					<div className="text-[#7367F0] font-medium ">Read More</div>
				</div>
			</div>
		</div>
	);
};

export default RelatedBlogs;
