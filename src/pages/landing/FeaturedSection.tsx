import React from "react";
import {
  GeoSvg,
  OccupancySvg,
  SizeSvg,
  TotalUnitsSvg,
} from "../../assets/Icons";
import Button, { ButtonIntent, ButtonSize } from "../../components/Button";
import Card from "../../components/Card";
import { ReactComponent as FeatureCircle } from "./feature-circle.svg";

const featuredStorages = [
  {
    id: "0",
    location: "Jersey City, NJ",
    total: 89,
    image: "/dummy/storage1.png",
    occupancy: "50%",
    size: "40,231 sqft",
    title: "Heading for self storage",
  },
  {
    id: "1",
    location: "Jersey City, NJ",
    total: 89,
    image: "/dummy/storage2.png",
    occupancy: "50%",
    size: "40,231 sqft",
    title: "Heading for self storage",
  },
  {
    id: "2",
    location: "Jersey City, NJ",
    total: 89,
    image: "/dummy/storage3.png",
    occupancy: "50%",
    size: "40,231 sqft",
    title: "Heading for self storage",
  },
];

const FeaturedSection: React.FC = () => {
  return (
    <div className="py-24 relative">
      <FeatureCircle className="-z-10 absolute -top-[150px] -left[50%]" />
      <div className="max-w-container mx-auto flex flex-col gap-6">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-4xl font-semibold">Featured Self Storage</h3>
          <div className="text-lg leading-normal pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare
          </div>
        </div>
        <div className="flex gap-5">
          {featuredStorages.map((card) => (
            <Card className="flex flex-col gap-7" key={card.id}>
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
                    <span className="text-base">
                      Occupancy: {card.occupancy}
                    </span>
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

        <div className="mx-auto flex gap-2 py-20">
          <div className="hover:bg-primary cursor-pointer w-6 h-6 border border-[#DBDEE7] rounded-full transition-colors duration-300 ease-in-out "></div>
          <div className="bg-primary cursor-pointer w-6 h-6 border border-[#DBDEE7] rounded-full transition-colors duration-300 ease-in-out "></div>
          <div className="hover:bg-primary cursor-pointer w-6 h-6 border border-[#DBDEE7] rounded-full transition-colors duration-300 ease-in-out "></div>
          <div className="hover:bg-primary cursor-pointer w-6 h-6 border border-[#DBDEE7] rounded-full transition-colors duration-300 ease-in-out "></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
