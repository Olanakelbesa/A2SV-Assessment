import Image from "next/image";
import React from "react";
import Link from "next/link";
import helpImg from "@/public/rafiki.png";
import Vector from "@/public/Vector.png";
import Vector1 from "@/public/Vector1.png";
import Vector2 from "@/public/Vector2.png";
import Vector3 from "@/public/Vector3.png";
import Vector4 from "@/public/Vector4.png";

const Footer = () => {
	return (
		<div className="pt-16">
			<div className="border-t-2 border-gray-300 border-solid border-opacity-30 py-10">
				<div className="flex justify-between p-10 px-20">
					<div>
						<Image src={helpImg} alt=" help" width={200} height={200} />
					</div>
					<div className="pt-5">
						<div className=" w-72 ">
							<p className="font-bold">
								Get involved in improving tech education in Africa!
							</p>
						</div>
						<div className="py-5">
							<button className="bg-[#264FAD] text-white px-12 py-2 rounded-lg ">
								Support Us
							</button>
						</div>
					</div>
					<div>
						<p className="font-semibold pb-3">Links</p>
						<div className="text-sm flex flex-col gap-2">
							<div>
								<Link href="/homePage">Home</Link>
							</div>
							<div>
								<Link href="/success-stories">Success Stories</Link>
							</div>
							<div>
								<Link href="/about-us">About Us</Link>
							</div>
							<div>
								<Link href="/get-involved">Get Involved</Link>
							</div>
						</div>
					</div>
					<div>
						<p className="font-semibold pb-3">Teams</p>
						<div className="text-sm flex flex-col gap-2">
							<div>
								<Link href="/">Board Members</Link>
							</div>
							<div>
								<Link href="/">Advisors/Mentors</Link>
							</div>
							<div>
								<Link href="/">Executives</Link>
							</div>
							<div>
								<Link href="/">Staffs</Link>
							</div>
						</div>
					</div>
					<div>
						<p className="font-semibold pb-3">Blogs</p>
						<div className="text-sm flex flex-col gap-2">
							<div>
								<Link href="/">Recent Blogs</Link>
							</div>
							<div>
								<Link href="/">New Blogs</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between px-10 py-5">
					<div>
						<p className=" text-gray-500 text-sm">
							&copy; 2020 2020 Africa to Silicon Valley, Inc. All right
							reserved.
						</p>
					</div>
					<div className="flex gap-10">
						<div>
							<Image src={Vector} alt="twiter" width={20} height={20} />
						</div>
						<div>
							<Image src={Vector1} alt="facebook" width={20} height={20} />
						</div>
						<div>
							<Image src={Vector2} alt="youtube" width={20} height={20} />
						</div>
						<div>
							<Image src={Vector3} alt="instagram" width={20} height={20} />
						</div>
						<div>
							<Image src={Vector4} alt="twiter" width={20} height={20} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
