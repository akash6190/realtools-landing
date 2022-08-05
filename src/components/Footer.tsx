import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  ChevronDownSvg,
  FBSvg,
  FooterBg1Svg,
  FooterBg2Svg,
  GlobwSvg,
  InstaSvg,
  LinkedinSvg,
  LogoPrimarySvg, TwitterSvg
} from "../assets/Icons";
import Button, { ButtonIntent, ButtonSize } from "./Button";

interface FooterProps {
  small?: boolean;
}

const currentYear = new Date().getFullYear();

const Footer: React.FC<FooterProps> = ({ small = false }) => {
  return (
    <div className="relative">
      <FooterBg1Svg className="absolute left-3 bottom-0" />
      <FooterBg2Svg className="absolute right-5 bottom-0" />
      <div className="flex gap-24 pt-40 pb-14 max-w-container mx-auto">
        <div>
          <Link to="/">
            <LogoPrimarySvg />
          </Link>
          <div className="pt-4">
            Nam posuere accumsan porta. Integer id orci sed ante tincidunt
            tincidunt sit amet sed libero.
          </div>
          <div className="pt-9">
            &copy; StorageConnect {currentYear}, All Rights Reserved
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold pb-6">QUICK LINKS</h4>
          <ul className="text-base list-none flex flex-col gap-5">
            <li className="whitespace-nowrap">
              <Link to="/active"> Active Listings</Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to="/sell">Self your Self Storage</Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to="/evaluate">Free Evaluation</Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to="/learn">Learn</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold pb-6">NEWSLETTER</h4>
          <form className="flex flex-col gap-2">
            <label htmlFor="newsletter-email">
              Get latest updates right in your inbox
            </label>
            <input
              className="rounded-10 border-[#E8EFFF] border bg-white px-6 py-4 mb-1"
              id="newsletter-email"
              name="newsletter-email"
              type="email"
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              intent={ButtonIntent.Primary}
              size={ButtonSize.Large}
            >
              Subscribe now
            </Button>
          </form>
        </div>
        <div>
          <h4 className="text-lg font-bold pb-6">LET'S GET SOCIAL</h4>
          <div className="flex flex-row gap-4 pb-9">
            <FBSvg />
            <LinkedinSvg />
            <TwitterSvg />
            <InstaSvg />
          </div>
          <Menu>
            <Menu.Button className="px-4 py-2 rounded-md bg-white border-[#E8EFFF] border w-full gap-2 flex items-center">
              <GlobwSvg />
              <div className="flex-1 text-left">English</div>
              <ChevronDownSvg />
            </Menu.Button>
            {/* <Menu.Items>
              <Menu.Item>English</Menu.Item>
              <Menu.Item>French</Menu.Item>
              <Menu.Item>Italian</Menu.Item>
              <Menu.Item>German</Menu.Item>
              <Menu.Item>Spanish</Menu.Item>
            </Menu.Items> */}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Footer;
