import React from "react";

const SkillCard = ({ skillIcon, major, skillName, isInView, num }) => {
	return (
		<div
			style={{
				transform: isInView ? "none" : "translateY(200px)",
				opacity: isInView ? 1 : 0,
				transition: `all ${Math.sqrt((num + 1) / 3)}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
			}}
			className={`${major ? "bg-sky-200/30" : "bg-slate-100"
				} items-center justify-around flex flex-col gap-3 sm:gap-4 p-3 sm:p-5 h-24 sm:h-max rounded-xl text-center`}
		>
			<div className="w-8 h-8 sm:w-10 sm:h-10 xl:w-10 xl:h-10">
				<img
					className="object-contain w-full h-full"
					src={skillIcon}
					alt={skillName}
				/>
			</div>
			<p className="text-xs sm:text-sm xl:text-sm break-words">{skillName}</p>
		</div>
	);
};

export default SkillCard;
