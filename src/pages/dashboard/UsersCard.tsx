import { LogoNoTextSvg } from "../../assets/Icons";

export const ActiveUsers: React.FC = () => {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white hover:shadow-lg shadow-md rounded-10">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <LogoNoTextSvg />
        </header>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Active Users
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">110</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">
            +10%
          </div>
        </div>
      </div>
    </div>
  );
};
