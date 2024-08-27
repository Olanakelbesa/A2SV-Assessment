import React from "react";

const Header = () => {
	return (
		<div className="flex items-center justify-between w-[67%]  pt-6 ">
			<div className="pl-20  ">
				<p className="text-[20px] font-bold  ">Blogs</p>
			</div>
			<div className="flex items-center gap-5">
				<form action="">
					<input
						type="text"
						placeholder="Search..."
						className=" py-2 px-4  border-2 border-solid border-gray-400 rounded-full border-opacity-40"
					/>
				</form>
				<div className="bg-[#264FAD] text-white py-2 px-5 rounded-full flex items-center">
					<p>+ New Blog</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
