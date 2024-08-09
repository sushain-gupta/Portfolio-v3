import { IoCallOutline } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React, { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useInView } from "framer-motion";
import { about } from "../../../data/About";
import memoji from "../../../data/assets/memoji2.png"

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section
			tabIndex={3}
			ref={ref}
			name="about"
			className="relative flex flex-col items-center justify-center min-h-screen py-20 bg-transparent sm:text-justify lg:text-start lg:flex-row lg:justify-between lg:gap-10 xl:gap-0 focus:outline-none lg:py-0"
		>

			<div className="relative flex flex-col items-center w-full sm:w-2/3 lg:w-1/3 xl:w-1/4">
				<div className="w-2/3 overflow-hidden lg:w-full"
					style={about.secondaryProfileImage && {
						borderRadius: "55% 45% 42% 58% / 55% 59% 41% 45%"
					}}>
					<img className="object-cover w-full h-full"
						src={about.secondaryProfileImage ?? memoji}
						alt="pfp" />
				</div>

				<h2 className="mt-8 text-3xl font-extrabold text-center lg:hidden lg:text-start xl:text-4xl heading">{about.firstName + " " + about.lastName}</h2>

				<div className="flex justify-center gap-5 my-5 text-2xl xl:hidden sm:flex-col lg:flex-row sm:absolute lg:static -right-20 top-20 lg:my-10">
					<RouterLink
						tabIndex={6}
						// style={{
						// 	transform: isInView ? "scale(1)" : "scale(0)",
						// 	opacity: isInView ? 1 : 0,
						// 	transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						// }}
						target="_blank"
						to={about.socialLinks.linkedin}
						className="p-2 rounded-full bg-sky-600 text-slate-50 focus:outline-none focus:outline-slate-500"
					>
						<FaLinkedinIn />
					</RouterLink>

					{
						about.socialLinks.github && (
							<RouterLink
								tabIndex={7}
								// style={{
								// 	transform: isInView ? "scale(1)" : "scale(0)",
								// 	opacity: isInView ? 1 : 0,
								// 	transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
								// }}
								to={about.socialLinks.github}
								target="_blank"
								className="p-2 rounded-full bg-slate-800 text-slate-50 focus:outline-none focus:outline-slate-500"
							>
								<AiFillGithub />
							</RouterLink>
						)
					}

					<RouterLink
						tabIndex={8}
						// style={{
						// 	transform: isInView ? "scale(1)" : "scale(0)",
						// 	opacity: isInView ? 1 : 0,
						// 	transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						// }}
						to={about.socialLinks.instagram}
						target="_blank"
						className="p-2 rounded-full bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400 text-slate-50 focus:outline-none focus:outline-slate-500"
					>
						<AiOutlineInstagram />
					</RouterLink>

					{
						about.socialLinks.twitter && (
							<RouterLink
								tabIndex={9}
								// style={{
								// 	transform: isInView ? "scale(1)" : "scale(0)",
								// 	opacity: isInView ? 1 : 0,
								// 	transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
								// }}
								to={about.socialLinks.instagram}
								target="_blank"
								className="p-2 rounded-full bg-gradient-to-br bg-sky-500 focus:outline-none focus:outline-slate-500"
							>
								<AiOutlineTwitter />
							</RouterLink>
						)
					}

				</div>

			</div>

			<div className="sm:text-base xl:text-lg lg:w-2/3 xl:w-1/2">
				<h2 className="hidden text-3xl font-extrabold lg:block xl:text-5xl heading">{about.firstName + " " + about.lastName}</h2>

				<p className="my-3">
					I'm an <span className="font-semibold">undergrad</span>, self taught
					web developer from <span className="font-semibold">Pune, India</span>.
					I possess skilled talent and immense experience in creating and
					maintaining visually appealing and user-friendly websites. I have
					comprehensive knowledge of various web development technologies such
					as{" "}
					<span className="font-semibold">
						HTML, CSS, JavaScript, MERN, Tailwind CSS, Firebase{" "}
					</span>
					and{" "}

					<Link
						tabIndex={4}
						to="skills"
						spy={true}
						smooth={true}
						className="py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 cursor-pointer group"
					>
						<span className="text-sky-500 bg-left-bottom bg-gradient-to-r from-sky-100 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-0.5">
							more
						</span>
					</Link>
					.
				</p>

				<p>
					Overall, I guarantee the highest level of professionalism, technical
					proficiency, and client satisfaction in every aspect of web
					development.
				</p>

				<div className="flex gap-4">
					<RouterLink
						tabIndex={5}
						to={about.resumeLink} target="_blank"
						className="flex items-center my-6 gap-2 px-5 py-1.5 rounded-full text-emerald-700 font-medium text-base duration-500 group w-max focus:outline-none focus:outline-slate-500 ring-1 ring-emerald-700 hover:bg-emerald-700 hover:text-white">
						Resume <CgFileDocument />
					</RouterLink>

					<RouterLink
						tabIndex={5}
						to="https://topmate.io/sushain/1136121" target="_blank"
						className="flex items-center my-6 gap-2 px-5 py-1.5 rounded-full text-sky-700 font-medium text-base duration-500 group w-max focus:outline-none focus:outline-slate-500 ring-1 ring-sky-600 hover:bg-sky-600 hover:text-white">
						Book 1:1 Call <IoCallOutline />
					</RouterLink>
				</div>
			</div>

			<div className="flex-col hidden gap-6 text-3xl xl:flex">
				<RouterLink
					tabIndex={6}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
					}}
					target="_blank"
					to={about.socialLinks.linkedin}
					className="p-2 duration-500 hover:shadow-sky-300 rounded-full shadow-lg bg-sky-600 hover:rotate-6 text-slate-50 focus:outline-none focus:outline-slate-500"
				>
					<FaLinkedinIn />
				</RouterLink>

				<RouterLink
					tabIndex={7}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
					}}
					to={about.socialLinks.github}
					target="_blank"
					className="p-2 duration-500 hover:shadow-slate-400 rounded-full shadow-lg bg-slate-800 hover:rotate-6 text-slate-50 focus:outline-none focus:outline-slate-500"
				>
					<AiFillGithub />
				</RouterLink>

				<RouterLink
					tabIndex={8}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
					}}
					to={about.socialLinks.instagram}
					target="_blank"
					className="p-2 hover:shadow-rose-300 shadow-lg rounded-full bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400 text-slate-50 focus:outline-none focus:outline-slate-500"
				>
					<AiOutlineInstagram />
				</RouterLink>
			</div>
		</section >
	);
};

export default About;
