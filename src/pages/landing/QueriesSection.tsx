import { EnvelopeSvg, SentSvg } from "../../assets/Icons";
import Button, { ButtonIntent, ButtonSize } from "../../components/Button";
import Card from "../../components/Card";
import { ReactComponent as QueriesCircle } from "./query-circle.svg";

const QueriesSection: React.FC = () => {
  return (
    <div className="py-36 relative">
      <EnvelopeSvg className="absolute right-[20.51%] top-[16.07%]" />
      <QueriesCircle className="absolute bottom-[16.49%] left-[15.4%] -z-10" />
      <div className="absolute right-0 left-0 top-0 bottom-0 bg-[#E8EFFF] -z-20">&nbsp;</div>
      <Card className="max-w-container mx-auto bg-[#ffffffe6] !z-10">
        <Card.Content className="flex items-center justify-between py-28 px-24">
          <div>
            <div className="text-4xl pb-5 font-bold">
              Any Queries? Reach Out to Us
            </div>
            <div className="text-lg">
              Feel free to write to us, we are happy to help you
            </div>
          </div>
          <Button
            intent={ButtonIntent.Primary}
            size={ButtonSize.Large}
            className="flex gap-2 items-center"
          >
            Write to us <SentSvg className="inline-block" />
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default QueriesSection;
