"use client";

import { motion } from "framer-motion";
import type React from "react";
import { fadeIn } from "@/styles/animations";

type Props = {
	children?: React.ReactNode;
	className?: string;
	side?: "left" | "right";
};

const Sidebar = ({ children, className = "", side = "left" }: Props) => {
	return (
		<motion.div
			variants={fadeIn(2.75)}
			initial="hidden"
			animate="show"
			className={`fixed bottom-0 flex-col items-center hidden md:flex ${className} ${
				side === "left" ? "left-6 xl:left-12" : "right-6 xl:right-12"
			}`}
		>
			{children}
			<div className="bg-slate-500 h-24 w-0.5 mt-5" />
		</motion.div>
	);
};

export default Sidebar;
