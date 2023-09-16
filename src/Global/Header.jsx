import React, { useEffect, useState } from "react";
import logo from "../data/assets/png/logo.png";
import { Link } from "react-scroll";

const Header = () => {
	const [scrollYVal, setScrollYVal] = useState(window.scrollY);

	useEffect(() => {
		window.addEventListener("scroll", () => setScrollYVal(window.scrollY));
	}, []);

	return (
		<header
			className={`${scrollYVal > 0 ? "shadow-md bg-slate-50/95 left-0 right-0" : "py-5"
				} flex fixed justify-between items-center top-0 w-full z-50 duration-500  px-24`}
		>
			<div className="w-16 h-16">
				<img className="w-full h-full" src={logo} alt="logo" />
			</div>

			<nav className="flex gap-2 rounded-full p-1 overflow-hidden duration-500 cursor-pointer">
				<Link
					to="home"
					spy={true}
					smooth={true}
					className="px-2 py-0.5 rounded-full duration-500   hover:bg-emerald-100"
				>
					Home
				</Link>

				<Link
					to="about"
					spy={true}
					smooth={true}
					className="px-2 py-0.5 rounded-full duration-500  hover:bg-emerald-100"
				>
					About
				</Link>

				<Link
					to="projects"
					spy={true}
					smooth={true}
					className="px-2 py-0.5 rounded-full duration-500 hover:bg-emerald-100"
				>
					Projects
				</Link>

				<Link
					to="experience"
					spy={true}
					smooth={true}
					className="px-2 py-0.5 rounded-full duration-500 hover:bg-emerald-100"
				>
					Experience
				</Link>

				{/* <Link
					to="testimonials"
					spy={true}
					smooth={true}
					className="px-2 py-0.5 rounded-full duration-500 hover:bg-emerald-100"
				>
					Testimonials
				</Link> */}
			</nav>

			<button className="flex items-center gap-2 hover:bg-emerald-600 px-3 py-1.5 rounded-lg text-slate-50 duration-500 group bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl">
				Get in touch
			</button>
		</header>
	);
};

export default Header;
