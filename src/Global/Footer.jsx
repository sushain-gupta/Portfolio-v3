import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import memoji from "../data/assets/svg/homeMemoji.svg"

const Footer = () => {
	return (
		<footer className="flex bg-neutral-900 px-16 xl:px-24 py-16 text-slate-300 relative">
			<div className="flex w-full divide-x">
				<div className="flex flex-1 gap-3 items-center justify-center">
					<div className="w-28 h-28 rounded-full overflow-hidden">
						<img
							className="w-full h-full object-cover"
							src={memoji}
							alt="pfp"
						/>
					</div>

					<div>
						<p className="font-semibold">Sushain Gupta</p>
						<p className="text-sm">
							Mail me at{" "}
							<span>
								<Link
									target="_blank"
									to="mailto:sushain.work@gmail.com"
									className="text-sky-500"
								>
									sushain.work@gmail.com
								</Link>
							</span>
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-5 flex-1 items-center justify-center">
					<h3 className="text-2xl xl:text-3xl font-black">Reach me out on</h3>

					<div className="flex gap-6 text-2xl">
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
				</div>
			</div>

			<div className="flex items-center gap-3 bg-neutral-950 rounded-2xl absolute p-5 -top-10 mx-auto left-0 right-0 w-max">
				<h2 className="text-xl xl:text-2xl font-black from-emerald-400 via-emerald-400 to-sky-500 bg-gradient-to-r bg-clip-text text-transparent">
					Start a project?
				</h2>

				<p className="text-sm">
					Interested in working together? We should queue up a time to chat.
				</p>

				<button className="flex items-center gap-2 hover:bg-emerald-600 px-2 text-sm xl:text-base xl:px-3 py-1.5 rounded-lg text-slate-50 duration-500 group bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl">
					Get in touch
				</button>
			</div>
		</footer>
	);
};

export default Footer;
