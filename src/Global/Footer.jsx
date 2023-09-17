import { AiOutlineTwitter } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { about } from "../data/About";

const Footer = () => {
	return (
		<footer className="relative flex pt-20 bg-neutral-900 p-7 sm:px-14 lg:px-16 xl:px-24 sm:pt-16 text-slate-300">
			<div className="flex flex-col w-full divide-y lg:flex-row lg:divide-y-0 lg:divide-x">
				<div className="flex items-center justify-center flex-1 gap-3 py-10 lg:py-0">
					<div className="w-24 h-24 overflow-hidden rounded-full sm:w-28 sm:h-28">
						<img
							className="object-cover w-full h-full"
							src={about.primaryProfileImage}
							alt="pfp"
						/>
					</div>

					<div>
						<p className="font-semibold">{about.firstName} {about.lastName}</p>
						<p className="text-sm">
							Mail me at{" "}
							<span>
								<Link
									target="_blank"
									to={`mailto:${about.email}`}
									className="text-sky-500"
								>
									{about.email}
								</Link>
							</span>
						</p>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center flex-1 gap-5 py-10 lg:py-0">
					<h3 className="text-2xl font-black xl:text-3xl">Reach me out on</h3>

					<div className="flex gap-6 text-2xl">
						<Link
							to={about.socialLinks.linkedin}
							target="_blank"
							className="p-2 duration-500 rounded-full shadow-xl bg-sky-600 hover:rotate-6 text-slate-50"
						>
							<FaLinkedinIn />
						</Link>

						{
							about.socialLinks.github && (
								<Link
									to={about.socialLinks.github}
									target="_blank"
									className="p-2 duration-500 rounded-full shadow-xl bg-slate-800 hover:rotate-6 text-slate-50"
								>
									<AiFillGithub />
								</Link>
							)}




						<Link
							to={about.socialLinks.instagram}
							target="_blank"
							className="p-2 duration-500 rounded-full shadow-xl bg-gradient-to-br hover:rotate-6 from-fuchsia-500 via-red-600 to-orange-400 text-slate-50"
						>
							<AiOutlineInstagram />
						</Link>

						{
							about.socialLinks.twitter &&
							(
								<Link
									to={about.socialLinks.twitter}
									target="_blank"
									className="p-2 duration-500 rounded-full shadow-xl bg-gradient-to-br hover:-rotate-6 bg-sky-500 text-slate-50"
								>
									<AiOutlineTwitter />
								</Link>
							)
						}

					</div>
				</div>
			</div>

			<div className="absolute left-0 right-0 flex flex-col items-center w-4/5 gap-5 p-5 mx-auto text-center lg:flex-row lg:gap-3 bg-neutral-950 rounded-2xl -top-16 lg:-top-10 sm:w-2/3 lg:w-max">
				<h2 className="text-2xl font-black text-transparent lg:text-xl xl:text-2xl from-emerald-400 via-emerald-400 to-sky-500 bg-gradient-to-r bg-clip-text">
					Start a project?
				</h2>

				<p className="text-sm">
					Interested in working together? We should queue up a time to chat.
					<Link
						target="_blank"
						to={`mailto:${about.email}`}
						className="inline-flex items-center gap-1 lg:hidden text-sky-500">Get in touch <BiMailSend /></Link>
				</p>

				<Link
					target="_blank"
					to={`mailto:${about.email}`}
					className="hidden lg:flex items-center gap-2 hover:bg-emerald-600 px-2 text-sm xl:text-base xl:px-3 py-1.5 rounded-lg text-slate-50 duration-500 group bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl">
					Get in touch
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
