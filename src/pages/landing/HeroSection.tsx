import { Link } from "react-router-dom";
import Button, { ButtonIntent, ButtonSize } from "../../components/Button";
import HeroPng from "../../assets/hero-bg.png";

const HeroSection: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r bg-cover from-primary to-transparent text-white -mt-24 py-24"
      style={{
        backgroundImage: `url(${HeroPng})`,
      }}
    >
      <div className="max-w-2xl gap-2 mx-auto flex text-center flex-col">
        <h1 className="mt-24 font-extrabold text-6xl leading-tight">
          Self Storage Business
          <br /> Buy.Sell.Learn.
        </h1>
        <h2 className="font-medium text-xl leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis,
          aliquam non tortor blandit lobortis. blandit
        </h2>
        <div className="flex gap-5 items-center justify-center pt-11">
          <Link to="/sell">
            <Button size={ButtonSize.Large} intent={ButtonIntent.Cta}>
              Sell your self storage
            </Button>
          </Link>
          <Link to="/active">
            <Button size={ButtonSize.Large} intent={ButtonIntent.None}>
              active self storage listing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
