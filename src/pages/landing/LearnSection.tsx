import { Link } from "react-router-dom";
import { ClockSvg, TagSvg, UserSvg } from "../../assets/Icons";
import Button, { ButtonIntent, ButtonSize } from "../../components/Button";
import Card from "../../components/Card";
import { ReactComponent as LeftCircle } from "./learn-circle-left.svg";
import { ReactComponent as RightCircle } from "./learn-circle-right.svg";

const learnBlogs = [
  {
    id: "0",
    image: "/dummy/storage4.png",
    timeAgo: "5 days ago",
    type: "Sell",
    seller: "Raza",
    title: "Everything you need to know about how to buy a Self Storage",
  },
  {
    id: "1",
    image: "/dummy/storage5.png",
    timeAgo: "3 days ago",
    type: "Operate",
    seller: "Raza",
    title: "Learn Everything about managing and operating a Self Storage",
  },
  {
    id: "2",
    image: "/dummy/storage6.png",
    timeAgo: "2 days ago",
    type: "Buy",
    seller: "Raza",
    title: "Everything you need to know about how to buy a Self Storage",
  },
  {
    id: "3",
    image: "/dummy/storage7.png",
    timeAgo: "5 days ago",
    type: "Sell",
    seller: "Raza",
    title: "Everything you need to know about how to buy a Self Storage",
  },
];

const LearnSection: React.FC = () => {
  return (
    <div className="relative rounded-tl-[300px] bg-primary">
      <LeftCircle className="absolute bottom-[10.7%] left-0" />
      <RightCircle className="absolute top-[15.66%] right-0" />
      <div className="max-w-container mx-auto py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-4xl font-semibold text-white">
            Learn Everything About Buying, Selling, and Operating a Self Storage
          </h3>
          <div className="text-lg text-white leading-normal pt-5">
            Learn about literally anything to know about Selling or Buying a
            Self Storage
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 max-w-container mx-auto">
        {learnBlogs.map((card) => (
          <Card
            className="flex flex-col gap-7 !p-0 bg-white shadow-lg"
            key={card.id}
          >
            <Card.Image
              src={card.image}
              alt="placeholder"
              className="px-[1px]"
            />
            <Card.Title className="px-2">{card.title}</Card.Title>
            <Card.Content className="flex flex-col px-2">
              <div className="flex gap-3">
                <div className="flex gap-2">
                  <ClockSvg />
                  <span className="text-sm">{card.timeAgo}</span>
                </div>
                <div className="flex gap-2">
                  <TagSvg />
                  <span className="text-sm">{card.type}</span>
                </div>
                <div className="flex gap-2">
                  <UserSvg />
                  <span className="text-sm">{card.seller}</span>
                </div>
              </div>
              <div className="px-10 py-5">
                <Link to="/learn">
                  <Button
                    className="w-full"
                    intent={ButtonIntent.Primary}
                    size={ButtonSize.Small}
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
      <div className="text-center py-24">
        <Link to={"/active"}>
          <Button
            intent={ButtonIntent.Cta}
            className="px-20"
            size={ButtonSize.Large}
          >
            Explore the Learning Section
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LearnSection;
