import Button, { ButtonIntent } from "../../components/Button";
import { ReactComponent as HaveStorageCircle } from "./have-storage.svg";

const HaveStorageSection: React.FC = () => {
  return (
    <div className="bg-[#E8EFFF] relative py-60 rounded-br-[300px]">
      <HaveStorageCircle className="absolute bottom-0 left-0" />
      <div className="max-w-container mx-auto">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold">
            Do you have a Self Storage for Sale?
          </h3>
          <div className="text-lg font-normal pb-10 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc.
          </div>
          <Button intent={ButtonIntent.Primary}>Sell Your Self Storage</Button>
        </div>
      </div>
    </div>
  );
};

export default HaveStorageSection;
