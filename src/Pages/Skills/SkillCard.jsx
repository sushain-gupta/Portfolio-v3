import React from "react";

const SkillCard = ({ skillIcon, major, skillName }) => {
	return (
		<div
			className={`${
				major ? "bg-sky-200/30" : "bg-slate-100"
			} items-center justify-between flex flex-col gap-4 p-5 w-40 h-36 rounded-xl text-center`}
		>
			<div className="w-12 flex-1">
				<img
					className="w-full h-full object-contain"
					src={skillIcon}
					alt={skillName}
				/>
			</div>
			<p>{skillName}</p>
		</div>
	);
};

export default SkillCard;
