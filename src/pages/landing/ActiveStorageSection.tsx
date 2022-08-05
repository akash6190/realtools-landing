import BgPng from "./active-storage.png";
import { ReactComponent as LeftCircle } from "./active-circle-left.svg";
import { ReactComponent as RightCircle } from "./active-circle-right.svg";
import Card from "../../components/Card";
import {
  GeoSvg,
  OccupancySvg,
  SizeSvg,
  TotalUnitsSvg,
} from "../../assets/Icons";
import Button, { ButtonIntent, ButtonSize } from "../../components/Button";
import { Link } from "react-router-dom";

const activeStorages = [
  {
    id: "0",
    location: "Jersey City, NJ",
    total: 89,
    image: "/dummy/storage4.png",
    occupancy: "50%",
    size: "40,231 sqft",
    title: "Heading for self storage",
  },
  {
    id: "1",
    location: "Jersey City, NJ",
    total: 89,
    image: "/dummy/storage5.png",
    occupancy: "50%",
    size: "40,231 sqft",
    title: "Heading for self storage",
  },
  {
    id: "2",
    location: "Jersey City, NJ",
    total: 89,
    image: "/dummy/storage6.png",
    occupancy: "50%",
    size: "40,231 sqft",
    title: "Heading for self storage",
  },
  {
    id: "3",
    location: "Jersey City, NJ",
    total: 89,
    image: "/dummy/storage7.png",
    occupancy: "50%",
    size: "40,231 sqft",
    title: "Heading for self storage",
  },
  {
    id: "4",
    location: "Jersey City, NJ",
    total: 89,
    image: "/dummy/storage8.png",
    occupancy: "50%",
    size: "40,231 sqft",
    title: "Heading for self storage",
  },
  {
    id: "5",
    location: "Jersey City, NJ",
    total: 89,
    image: "/dummy/storage1.png",
    occupancy: "50%",
    size: "40,231 sqft",
    title: "Heading for self storage",
  },
];

const ActiveStorageSection: React.FC = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${BgPng})`,
      }}
    >
      <LeftCircle className="absolute top-[47.67%] right-[89.65%] bottom-[41.8%] left-0" />
      <RightCircle className="absolute top-[19.95%] right-0 bottom-[69.52%]" />
      <div className="max-w-container mx-auto py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-4xl font-semibold text-white">
            Active Listing Self Storages
          </h3>
          <div className="text-lg text-white leading-normal pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 max-w-container mx-auto">
        {activeStorages.map((card) => (
          <Card className="flex flex-col gap-7 bg-white shadow-lg" key={card.id}>
            <Card.Image src={card.image} alt="placeholder" />
            <Card.Title>{card.title}</Card.Title>
            <Card.Content className="flex flex-col">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex gap-3">
                  <GeoSvg />
                  <span className="text-base">{card.location}</span>
                </div>
                <div className="flex gap-3">
                  <TotalUnitsSvg />
                  <span className="text-base">Total Units: {card.total}</span>
                </div>
                <div className="flex gap-3">
                  <SizeSvg />
                  <span className="text-base">Size: {card.size}</span>
                </div>
                <div className="flex gap-3">
                  <OccupancySvg />
                  <span className="text-base">Occupancy: {card.occupancy}</span>
                </div>
              </div>
              <div className="px-10 pt-7">
                <Button
                  className="w-full"
                  intent={ButtonIntent.Primary}
                  size={ButtonSize.Small}
                >
                  View More Detail
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
      <div className="text-center py-24">
        <Link to={"/active"}>
          <Button intent={ButtonIntent.Cta} className="px-20" size={ButtonSize.Large}>
            View more listings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ActiveStorageSection;
