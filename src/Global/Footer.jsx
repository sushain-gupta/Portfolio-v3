import { HiOutlineChatAlt2 } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { about } from "../data/About";
import memoji from "../data/assets/memoji1.png"

const Footer = () => {
	return (
		<section>
			<div className="flex flex-col items-center gap-8 justify-center mb-32 text-center p-7">
				<p className="text-lg sm:text-3xl xl:text-5xl w-full 2xl:w-2/3 border-t pt-8">
					Looking forward to build something for your <br />
					buisness/organization?
				</p>

				<Link
					to="https://topmate.io/sushain/1136713"
					target="_blank"
					className="flex items-center gap-2 px-4 text-sm sm:text-base xl:text-lg font-semibold xl:px-5 py-2 rounded-full text-emerald-700 duration-500 ring-1 hover:bg-emerald-700 hover:text-white ring-emerald-700">
					Let's queue up a time to chat <HiOutlineChatAlt2 />
				</Link>
			</div>

			<footer className="relative flex pt-10 bg-neutral-900 p-5 sm:px-14 lg:px-16 xl:px-24 sm:py-14 text-slate-300">
				<div className="flex flex-col w-full divide-y lg:flex-row lg:divide-y-0 lg:divide-x">
					<div className="flex items-center justify-center flex-1 gap-3 py-10 lg:py-0">
						<div className="w-24 h-24 overflow-hidden rounded-full sm:w-28 sm:h-28">
							<img
								className="object-cover w-full h-full"
								src={about.primaryProfileImage ?? memoji}
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
								className="p-2 rounded-full shadow-lg duration-500 hover:shadow-sky-800 bg-sky-600 text-slate-50"
							>
								<FaLinkedinIn />
							</Link>

							{
								about.socialLinks.github && (
									<Link
										to={about.socialLinks.github}
										target="_blank"
										className="p-2 rounded-full duration-500 hover:shadow-slate-800 shadow-lg bg-slate-800 text-slate-50"
									>
										<AiFillGithub />
									</Link>
								)}

							<Link
								to={about.socialLinks.instagram}
								target="_blank"
								className="p-2 rounded-full duration-500 hover:shadow-rose-800 shadow-lg bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400 text-slate-50"
							>
								<AiOutlineInstagram />
							</Link>

							{
								about.socialLinks.twitter &&
								(
									<Link
										to={about.socialLinks.twitter}
										target="_blank"
										className="p-2 rounded-full shadow-xl bg-gradient-to-br bg-sky-500 text-slate-50"
									>
										<AiOutlineTwitter />
									</Link>
								)
							}

						</div>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
