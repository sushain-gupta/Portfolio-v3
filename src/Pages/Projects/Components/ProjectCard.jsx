import { HiOutlineExternalLink } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
	const [open, setOpen] = useState(false);

	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className="flex flex-col justify-center rounded-2xl overflow-hidden relative group bg-gray-100"
		>
			<div className="flex items-center w-86 px-6 py-4 z-10">
				<img
					className="min-w-full min-h-full object-cover"
					src={project.ImageUrl}
					alt="portfolio illustration"
				/>
			</div>

			<div className="flex flex-col justify-between px-6 pb-4 text-sm">
				<p className="text-lg font-bold mb-2">{project.Title}</p>

				<div>
					<p>
						<span className="font-bold">Techstack</span> - {project.Techstack}
					</p>
					<p>
						<span className="font-bold">Libraries</span> - {project.Library}
					</p>
				</div>
			</div>

			<div
				className={`${
					open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
				} absolute flex top-0 h-full w-full my-auto bottom-0  group-hover: z-20 right-0 bg-sky-900/70 duration-700 rounded-2xl`}
			>
				<div className="m-auto w-max h-max justify-between flex gap-6 text-2xl">
					<Link
						to={project.Github}
						className=" bg-slate-50 p-2 hover:rotate-6 rounded-full duration-500"
					>
						<AiFillGithub />
					</Link>

					<Link
						to={project.ProjectLink}
						className="bg-slate-50 p-2 rounded-full hover:rotate-6 duration-500"
					>
						<HiOutlineExternalLink />
					</Link>

					<button
						onClick={() => setOpen(false)}
						className="bg-slate-50 p-2 rounded-full hover:rotate-90 duration-500"
					>
						<IoIosClose />
					</button>
				</div>
			</div>

			<div
				className={`top-0 absolute w-full h-1/2 bg-gradient-to-br from-gray-700 via-gray-900 to-black`}
			></div>
		</div>
	);
};

export default ProjectCard;
