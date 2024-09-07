import { BiMailSend } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"
import { about } from "../data/About";
import { motion } from "framer-motion"

const Header = () => {
	const [openSidebar, setOpenSidebar] = useState(false)
	const [scrollYVal, setScrollYVal] = useState(window.scrollY);

	const animationPlayed = sessionStorage.getItem('animationPlayed') || false;

	useEffect(() => {
		if (!animationPlayed) {
			sessionStorage.setItem('animationPlayed', 'true');
		}
	}, [animationPlayed])

	useEffect(() => {
		window.addEventListener("scroll", () => setScrollYVal(window.scrollY));
	}, []);

	return (
		<motion.header
			className={`${scrollYVal > 0 ? "bg-white/80 backdrop-blur-sm py-2 sm:py-3" : "py-6 border-white/0"
				} border-b flex fixed justify-between items-center top-0 w-full z-50 duration-500 px-5 sm:px-8 lg:px-14 xl:px-24`}

			initial={{ y: 0, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={animationPlayed ? {} : { duration: 2, delay: 3.5 }}
		>
			<RouterLink to={about.hostedUrl} className="w-12 h-12 sm:w-12 sm:h-12">
				<img className="w-full h-full rounded-full" src={about.logo} alt="logo" />
			</RouterLink>

			<div onClick={() => setOpenSidebar(false)} className={`${openSidebar ? "translate-x-0" : "translate-x-full"} lg:hidden fixed left-0 w-full h-screen lg:h-full bottom-0 bg-white/80 duration-700 backdrop-blur-sm`} />

			<nav onClick={() => setOpenSidebar(false)} className={`${openSidebar ? "translate-x-0" : "translate-x-full"} fixed lg:static h-screen lg:h-full flex-col top-0 bg-white lg:bg-transparent lg:translate-x-0 shadow-2xl lg:shadow-none bottom-0 right-0 w-2/3 sm:w-1/2 lg:w-max p-6 sm:p-8 z-60 lg:flex-row flex gap-5 lg:gap-10 lg:p-1 overflow-hidden duration-500 text-sm md:text-base`}>
				<button onClick={() => setOpenSidebar(false)} className="p-2 ml-auto overflow-hidden text-xl text-red-500 duration-500 rounded-full bg-rose-100 lg:hidden z-60 md:text-2xl">
					<CgMenuRight />
				</button>

				<Link
					onClick={() => setOpenSidebar(false)}
					to="home"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 duration-300 cursor-pointer group"
				>
					<span className="bg-left-bottom bg-gradient-to-r from-emerald-100 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
						Home
					</span>
				</Link>

				<Link
					onClick={() => setOpenSidebar(false)}
					to="about"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 duration-300 cursor-pointer group"
				>
					<span className="bg-left-bottom bg-gradient-to-r from-emerald-100 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
						About
					</span>
				</Link>

				<Link
					onClick={() => setOpenSidebar(false)}
					to="skills"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 duration-300 cursor-pointer group"
				>
					<span className="bg-left-bottom bg-gradient-to-r from-emerald-100 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
						Skills
					</span>
				</Link>

				<Link
					onClick={() => setOpenSidebar(false)}
					to="projects"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 duration-300 cursor-pointer group"
				>
					<span className="bg-left-bottom bg-gradient-to-r from-emerald-100 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
						Projects
					</span>
				</Link>

				<Link
					onClick={() => setOpenSidebar(false)}
					to="experience"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 duration-300 cursor-pointer group"
				>
					<span className="bg-left-bottom bg-gradient-to-r from-emerald-100 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
						Experience
					</span>
				</Link>

				<Link
					onClick={() => setOpenSidebar(false)}
					to="testimonials"
					spy={true}
					smooth={true}
					className="px-2 py-1.5 lg:py-0.5 duration-300 cursor-pointer group"
				>
					<span className="bg-left-bottom bg-gradient-to-r from-emerald-100 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
						Testimonials
					</span>
				</Link>

				<RouterLink
					target="_blank"
					to={`mailto:${about.email}`}
					onClick={() => setOpenSidebar(false)}
					className="mt-auto mx-auto lg:hidden group flex gap-2 items-center bg-neutral-900 text-white w-full justify-center py-3 rounded-md">
					Get in touch
					<BiMailSend className="text-rose-400 text-2xl" />
				</RouterLink>
			</nav>

			<button
				onClick={() => setOpenSidebar(true)} className="p-2 ml-auto overflow-hidden text-2xl rounded-full lg:hidden z-60">
				<CgMenuRightAlt />
			</button>

			<RouterLink
				to="https://topmate.io/sushain"
				target="_blank"
				className="hidden lg:flex gap-1.5 px-2 lg:py-0.5 duration-300 cursor-pointer group">
				<span className="bg-left-bottom flex items-center gap-1.5 bg-gradient-to-r from-rose-100 to-rose-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
					Get in touch

					<BiMailSend className="text-rose-500 text-2xl" />
				</span>

			</RouterLink>
		</motion.header>
	);
};

export default Header;
