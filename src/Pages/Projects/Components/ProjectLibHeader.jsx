import { AiFillHome } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight, CgMenuRightAlt } from "react-icons/cg";
import { about } from "../../../data/About";

const ProjectLibHeader = () => {
	const [scrollYVal, setScrollYVal] = useState(window.scrollY);
	const [openSidebar, setOpenSidebar] = useState(true)

	useEffect(() => {
		window.addEventListener("scroll", () => setScrollYVal(window.scrollY));
	}, []);

	return (
		<header
			className={`${scrollYVal > 0 ? "shadow-md bg-slate-50/95 left-0 right-0" : "py-5"
				} flex fixed justify-between items-center top-0 w-full z-50 duration-500 px-5 sm:px-8 lg:px-14 xl:px-24`}
		>

			<Link to={about.hostedUrl} className="w-14 h-14 sm:w-16 sm:h-16">
				<img className="w-full h-full" src={about.logo} alt="logo" />
			</Link>

			<nav onClick={() => setOpenSidebar(false)} className={`${openSidebar ? "translate-x-0" : "translate-x-full"} fixed lg:static flex-col top-0 bg-white/95 lg:bg-transparent lg:translate-x-0 shadow-2xl lg:shadow-none bottom-0 right-0 w-2/3 sm:w-1/2 lg:w-max p-6 sm:p-8 z-60 lg:flex-row flex gap-5 lg:gap-2 lg:p-1 overflow-hidden duration-500 text-sm md:text-base`}>
				<button onClick={() => setOpenSidebar(false)} className="p-2 ml-auto overflow-hidden text-xl text-red-500 duration-500 rounded-full bg-rose-100 lg:hidden z-60 md:text-2xl">
					<CgMenuRight />
				</button>

				<Link
					onClick={() => history.back() && setOpenSidebar(false)}
					spy={true}
					smooth={true}
					className="flex items-center gap-2 px-2 py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 hover:bg-emerald-200 cursor-pointer"
				>
					<AiFillHome /> Home
				</Link>

				<button
					onClick={() => setOpenSidebar(false)}
					className="px-3 py-2 mt-auto text-center duration-500 rounded-lg lg:hidden hover:bg-emerald-600 text-slate-50 group bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl">
					Get in touch
				</button>
			</nav>

			<button onClick={() => setOpenSidebar(true)} className="p-2 ml-auto overflow-hidden text-2xl rounded-full lg:hidden z-60">
				<CgMenuRightAlt />
			</button>

			<button className="hidden lg:flex items-center gap-2 hover:bg-emerald-600 px-3 py-1.5 rounded-lg text-slate-50 duration-500 group bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl">
				Get in touch
			</button>
		</header>
	);
};

export default ProjectLibHeader;
