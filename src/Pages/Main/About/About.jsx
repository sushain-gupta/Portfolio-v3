import { CgFileDocument } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React, { useRef } from "react";
import memoji from "../../../data/assets/png/aboutMemoji.png";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useInView } from "framer-motion";

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section
			tabIndex={3}
			ref={ref}
			name="about"
			className="min-h-screen flex flex-col sm:text-justify lg:text-start lg:flex-row justify-center lg:justify-between bg-transparent items-center lg:gap-10 xl:gap-0 relative focus:outline-none"
		>

			<div className="w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 overflow-hidden">
				<img className="w-full h-full object-contain" src={memoji} alt="memoji" />

			</div>

			<h2 className="lg:hidden font-extrabold text-center lg:text-start text-3xl xl:text-4xl heading mt-8">Sushain Gupta</h2>


			<div className="xl:hidden flex sm:flex-col sm:absolute right-0 top-56 justify-center my-5 lg:my-10 gap-5 text-2xl">
				<RouterLink
					tabIndex={6}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
					target="_blank"
					to="https://www.linkedin.com/in/sushain-gupta/"
					className="bg-sky-600 p-2 hover:rotate-6 rounded-full text-slate-50 duration-500 focus:outline-none focus:outline-slate-500"
				>
					<FaLinkedinIn />
				</RouterLink>

				<RouterLink
					tabIndex={7}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
					to="https://github.com/sushain-gupta/"
					target="_blank"
					className=" bg-slate-800 p-2 hover:rotate-6 rounded-full text-slate-50 duration-500 focus:outline-none focus:outline-slate-500"
				>
					<AiFillGithub />
				</RouterLink>

				<RouterLink
					tabIndex={8}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
					to="https://www.instagram.com/sushain.gupta/"
					target="_blank"
					className="bg-gradient-to-br hover:rotate-6 from-fuchsia-500 via-red-600 to-orange-400 p-2 rounded-full text-slate-50 duration-500 focus:outline-none focus:outline-slate-500"
				>
					<AiOutlineInstagram />
				</RouterLink>
			</div>

			<div className="text-sm sm:text-base lg:w-2/3 xl:w-1/2">
				<h2 className="hidden lg:block font-extrabold text-3xl xl:text-4xl heading">Sushain Gupta</h2>

				<p className="my-3">
					I'm an <span className="font-semibold">undergrad</span>, self taught
					web developer from <span className="font-semibold">Pune, India</span>.
					I possess skilled talent and immense experience in creating and
					maintaining visually appealing and user-friendly websites. I have
					comprehensive knowledge of various web development technologies such
					as{" "}
					<span className="font-semibold">
						HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Firebase{" "}
					</span>
					and{" "}
					<Link
						tabIndex={4}
						to="skills"
						spy={true}
						smooth={true}
						className="text-sky-500 font-semibold cursor-pointer hover:underline hover:text-sky-600 focus:outline-none focus:underline"
					>
						more
					</Link>
					.
				</p>

				<p>
					Overall, I guarantee the highest level of professionalism, technical
					proficiency , and client satisfaction in every aspect of web
					development.
				</p>

				<RouterLink
					tabIndex={5}
					to="https://firebasestorage.googleapis.com/v0/b/sushains-portfolio.appspot.com/o/Sushain%20Rajesh%20Gupta.pdf?alt=media&token=361168f2-05eb-4039-91b6-b827c27c7457" target="_blank"
					className="flex items-center my-5 gap-2 hover:bg-emerald-600 px-3 py-1.5 rounded-lg text-slate-50 duration-500 group bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl w-max focus:outline-none focus:outline-slate-500">
					Resume <CgFileDocument />
				</RouterLink>
			</div>

			<div className="hidden xl:flex flex-col gap-6 text-3xl">
				<RouterLink
					tabIndex={6}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
					target="_blank"
					to="https://www.linkedin.com/in/sushain-gupta/"
					className="bg-sky-600 p-2 hover:rotate-6 rounded-full text-slate-50 duration-500 shadow-xl focus:outline-none focus:outline-slate-500"
				>
					<FaLinkedinIn />
				</RouterLink>

				<RouterLink
					tabIndex={7}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
					to="https://github.com/sushain-gupta/"
					target="_blank"
					className=" bg-slate-800 p-2 hover:rotate-6 rounded-full text-slate-50 duration-500 shadow-xl focus:outline-none focus:outline-slate-500"
				>
					<AiFillGithub />
				</RouterLink>

				<RouterLink
					tabIndex={8}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
					to="https://www.instagram.com/sushain.gupta/"
					target="_blank"
					className="bg-gradient-to-br hover:rotate-6 from-fuchsia-500 via-red-600 to-orange-400 p-2 rounded-full text-slate-50 duration-500 shadow-xl focus:outline-none focus:outline-slate-500"
				>
					<AiOutlineInstagram />
				</RouterLink>
			</div>
		</section >
	);
};

export default About;
