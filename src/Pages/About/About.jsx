import { CgFileDocument } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import memoji from "../../data/assets/png/aboutMemoji.png";

const About = () => {
	return (
		<section className="py-28 flex justify-between bg-transparent items-center relative">
			<div className="w-1/4">
				<img className="w-full h-full object-contain" src={memoji} alt="" />
			</div>

			<div className="w-1/2">
				<h2 className="font-extrabold text-4xl heading">Sushain Gupta</h2>

				<p className="my-3">
					I’m an <b>undergrad</b>, self taught web developer from{" "}
					<b>Pune, India</b>. I possess skilled talent and immense experience in
					creating and maintaining visually appealing and user-friendly
					websites. I have comprehensive knowledge of various web development
					technologies such as{" "}
					<b>HTML, CSS, JavaScript, ReactJS, Tailwind CSS, and Firebase </b>.
				</p>

				<p>
					Overall, I guarantee the highest level of professionalism, technical
					proficiency , and client satisfaction in every aspect of web
					development.
				</p>

				<button className="flex items-center my-5 gap-2 hover:bg-emerald-600 px-3 py-1.5 rounded-lg text-slate-50 duration-500 group bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl">
					Resume <CgFileDocument />
				</button>
			</div>

			<div className="flex flex-col gap-6 text-3xl">
				<Link
					target="_blank"
					to="https://www.linkedin.com/in/sushain-gupta/"
					className="bg-sky-600 p-2 hover:rotate-6 rounded-full text-slate-50 duration-500 shadow-xl"
				>
					<FaLinkedinIn />
				</Link>

				<Link
					to="https://github.com/sushain-gupta/"
					target="_blank"
					className=" bg-slate-800 p-2 hover:rotate-6 rounded-full text-slate-50 duration-500 shadow-xl"
				>
					<AiFillGithub />
				</Link>

				<Link
					to="https://www.instagram.com/sushain.gupta/"
					target="_blank"
					className="bg-gradient-to-br hover:rotate-6 from-fuchsia-500 via-red-600 to-orange-400 p-2 rounded-full text-slate-50 duration-500 shadow-xl"
				>
					<AiOutlineInstagram />
				</Link>
			</div>
		</section>
	);
};

export default About;
