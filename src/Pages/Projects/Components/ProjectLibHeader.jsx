import { AiFillHome } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import logo from "../../../data/assets/png/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const ProjectLibHeader = () => {
	const [scrollYVal, setScrollYVal] = useState(window.scrollY);

	useEffect(() => {
		window.addEventListener("scroll", () => setScrollYVal(window.scrollY));
	}, []);

	return (
		<header
			className={`${scrollYVal > 0 ? "shadow-md bg-slate-50/95 left-0 right-0" : "py-5"
				} flex fixed justify-between items-center top-0 w-full z-50 duration-500  px-24`}
		>
			<Link to="/" className="w-16 h-16">
				<img className="w-full h-full" src={logo} alt="logo" />
			</Link>

			<nav className="flex gap-2 p-1 overflow-hidden duration-500 rounded-full cursor-pointer">
				<Link
					onClick={() => history.back()}
					spy={true}
					smooth={true}
					className="flex items-center gap-2 px-3 py-1 text-sm duration-500 rounded-full hover:bg-emerald-100"
				>
					<AiFillHome /> Home
				</Link>
			</nav>

			<button className="flex items-center gap-2 hover:bg-emerald-600 px-3 py-1.5 rounded-lg text-slate-50 duration-500 group bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl">
				Get in touch
			</button>
		</header>
	);
};

export default ProjectLibHeader;
