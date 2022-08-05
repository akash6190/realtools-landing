import { BannerSvg } from "../assets/Icons";

const Banner: React.FC = () => {
  return (
    <div className="relative bg-[#E8EFFF] p-4 sm:p-6 rounded-10 overflow-hidden mb-8">

      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        <BannerSvg />
      </div>

      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">Good afternoon, Raza. 👋</h1>
        <p>Here is what's happening with your projects today:</p>
      </div>

    </div>
  );
}

export default Banner;