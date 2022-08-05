import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { LogoSvg } from "../assets/Icons";
import Button, { ButtonIntent } from "./Button";

const ActivableLink = (props: any) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      clsx("text-xl leading-none", {
        "text-white": !isActive,
        "font-semibold text-cta": isActive,
      })
    }
  />
);

interface NavbarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  transparent = false,
  className,
  ...divProps
}) => {
  return (
    <div
      className={clsx("w-100", {
        "bg-transparent": transparent,
        "bg-primary": !transparent,
      })}
    >
      <div
        className={clsx(
          "max-w-container mx-auto flex justify-between items-center py-l",
          className,
        )}
        {...divProps}
      >
        <nav>
          <Link to="/">
            <LogoSvg />
          </Link>
        </nav>
        <nav className="flex items-center gap-10">
          <ActivableLink to="/active">Active listings</ActivableLink>
          <ActivableLink to="/sell">Sell your self storage</ActivableLink>
          <ActivableLink to="/evaluate">Free evaluation</ActivableLink>
          <ActivableLink to="/learn">Learn</ActivableLink>
          <Button intent={ButtonIntent.Cta}>Contact</Button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
