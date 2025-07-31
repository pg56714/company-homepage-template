"use client";
import { Wrapper } from "@/components";
import { getSectionAnimation } from "@/styles/animations";
import Image from "next/image";

const logoSvgs = [
  "#E5E7EB",
  "#FDE68A",
  "#A7F3D0",
  "#BFDBFE",
  "#FCA5A5",
  "#C4B5FD",
  "#F9A8D4",
  "#FDBA74",
];

const About = () => {
  return (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="mb-20 text-5xl font-light leading-tight text-center text-slate-900 dark:text-slate-200">
        Our <span className="text-accent">Background</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-16">
        {logoSvgs.map((color, idx) => (
          <div key={idx} className="flex items-center justify-center h-20">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect width="80" height="80" rx="16" fill={color} />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                fontSize="24"
                fill="#6B7280"
              >
                LOGO
              </text>
            </svg>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default About;
