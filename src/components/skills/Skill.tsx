import type { SkillType } from "@/lib/types/sections";

// import Image from "next/image";
// const SkillsCard = ({ icon, title, desc }: SkillType) => {
//     return (
//         <div className="flex items-start gap-5 text-slate-900 dark:text-slate-200">
//             <div className="w-16 h-16 shrink-0">
//                 <Image src={icon} alt={title} width={64} height={64} />
//             </div>
//             <div>
//                 <h3 className="mb-2 text-2xl font-light leading-tight text-left">
//                     {title}
//                 </h3>
//                 <p className="text-base text-gray-700 dark:text-gray-400">{desc}</p>
//             </div>
//         </div>
//     );

const colors = ["#FDE68A", "#A7F3D0", "#BFDBFE"];

const SkillsCard = ({
  title,
  desc,
  idx,
}: Omit<SkillType, "icon"> & { idx: number }) => {
  return (
    <div className="flex items-start gap-5 text-slate-900 dark:text-slate-200">
      <div className="flex items-center justify-center w-16 h-16 shrink-0">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect
            width="64"
            height="64"
            rx="12"
            fill={colors[idx % colors.length]}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fontSize="20"
            fill="#6B7280"
          >
            {`S${idx + 1}`}
          </text>
        </svg>
      </div>
      <div>
        <h3 className="mb-2 text-2xl font-light leading-tight text-left">
          {title}
        </h3>
        <p className="text-base text-gray-700 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
