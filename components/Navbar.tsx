"use client";

import React from "react";
import A2SVImg from "@/public/Group 25.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	const linkClasses = "hover:text-[#264FAD] py-2"; // common classes for all links

	const activeLinkClasses =
		"text-[#264FAD] border-b-4 border-solid border-b-[#264FAD] py-2"; // classes for active link

	return (
		<div className="flex justify-between items-center px-10 py-4">
			<div>
				<Image
					src={A2SVImg}
					alt="logo"
					width={110}
					height={110}
					className="py-2"
				/>
			</div>
			<div className="flex gap-10">
				<Link
					href="/homePage"
					className={pathname === "/homePage" ? activeLinkClasses : linkClasses}
				>
					Home
				</Link>
				<Link
					href="/teams"
					className={pathname === "/teams" ? activeLinkClasses : linkClasses}
				>
					Teams
				</Link>
				<Link
					href="/success-stories"
					className={
						pathname === "/success-stories" ? activeLinkClasses : linkClasses
					}
				>
					Success Stories
				</Link>
				<Link
					href="/about-us"
					className={pathname === "/about-us" ? activeLinkClasses : linkClasses}
				>
					About Us
				</Link>
				<Link
					href="/blogs"
					className={pathname === "/blogs" ? activeLinkClasses : linkClasses}
				>
					Blogs
				</Link>
				<Link
					href="/get-involved"
					className={
						pathname === "/get-involved" ? activeLinkClasses : linkClasses
					}
				>
					Get Involved
				</Link>
			</div>
			<div className="flex gap-5">
				<Link
					href="/login"
					className={`text-[#3C3C3C] hover:text-[#264FAD] font-bold py-2 ${
						pathname === "/login" && "text-[#264FAD]"
					}`}
				>
					Login
				</Link>
				<Link
					href="/donate"
					className={`text-[#fff] font-bold bg-[#264FAD] py-2 px-6 rounded-lg ${
						pathname === "/donate" && "bg-[#1e3a8a]"
					}`}
				>
					Donate
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
