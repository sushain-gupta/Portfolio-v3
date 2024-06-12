import { CgMenuRightAlt } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"
import { about } from "../data/About";

const Header = () => {
	const [openSidebar, setOpenSidebar] = useState(false)
	const [scrollYVal, setScrollYVal] = useState(window.scrollY);

	useEffect(() => {
		window.addEventListener("scroll", () => setScrollYVal(window.scrollY));
	}, []);

	return (
		<header
			className={`${scrollYVal > 0 ? "shadow-md bg-white/95 left-0 right-0" : "py-5"
				} flex fixed justify-between items-center top-0 w-full z-50 duration-500 px-5 sm:px-8 lg:px-14 xl:px-24 rounded-b-2xl`}
		>
			<RouterLink to={about.hostedUrl} className="w-14 h-14 sm:w-16 sm:h-16">
				<img className="w-full h-full" src={about.logo} alt="logo" />
			</RouterLink>

			<div onClick={() => setOpenSidebar(false)} className={`${openSidebar ? "translate-x-0" : "translate-x-full"} lg:hidden fixed left-0 w-full bottom-0 h-full bg-white/80 duration-700 backdrop-blur-sm`} />

			<nav onClick={() => setOpenSidebar(false)} className={`${openSidebar ? "translate-x-0" : "translate-x-full"} fixed lg:static flex-col top-0 bg-white/95 lg:bg-transparent lg:translate-x-0 shadow-2xl lg:shadow-none bottom-0 right-0 w-2/3 sm:w-1/2 lg:w-max p-6 sm:p-8 z-60 lg:flex-row flex gap-5 lg:gap-2 lg:p-1 overflow-hidden duration-500 text-sm md:text-base`}>
				<button onClick={() => setOpenSidebar(false)} className="p-2 ml-auto overflow-hidden text-xl text-red-500 duration-500 rounded-full bg-rose-100 lg:hidden z-60 md:text-2xl">
					<CgMenuRight />
				</button>

				<Link
					onClick={() => setOpenSidebar(false)}
					to="home"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 hover:bg-emerald-200 cursor-pointer"
				>
					Home
				</Link>

				<Link
					onClick={() => setOpenSidebar(false)}
					to="about"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 hover:bg-emerald-200 cursor-pointer"
				>
					About
				</Link>

				<Link
					onClick={() => setOpenSidebar(false)}
					to="projects"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 hover:bg-emerald-200 cursor-pointer"
				>
					Projects
				</Link>

				<Link
					onClick={() => setOpenSidebar(false)}
					to="experience"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 hover:bg-emerald-200 cursor-pointer"
				>
					Experience
				</Link>

				{/* <Link
					onClick={() => setOpenSidebar(false)}
					to="testimonials"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 hover:bg-emerald-200 cursor-pointer"
				>
					Experience
				</Link> */}

				<RouterLink
					target="_blank"
					to={`mailto:${about.email}`}
					onClick={() => setOpenSidebar(false)}
					className="px-3 py-2 mt-auto text-center duration-500 rounded-lg lg:hidden hover:bg-emerald-600 text-slate-50 group bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl">
					Get in touch
				</RouterLink>
			</nav>

			<button
				onClick={() => setOpenSidebar(true)} className="p-2 ml-auto overflow-hidden text-2xl rounded-full lg:hidden z-60">
				<CgMenuRightAlt />
			</button>

			<RouterLink
				to={`mailto:${about.email}`}
				target="_blank"
				className="hidden lg:flex items-center gap-2 hover:bg-emerald-600 px-3 py-1.5 rounded-lg text-slate-50 duration-500 group bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl">
				Get in touch
			</RouterLink>
		</header>
	);
};

export default Header;
