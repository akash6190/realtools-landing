import Button, { ButtonIntent } from "../../components/Button";

const WantStorageSection: React.FC = () => {
  return (
    <div className="relative pt-44 pb-40">
      <div className="max-w-container mx-auto flex justify-end">
        <div className="max-w-[50%]">
          <h3 className="text-3xl font-bold">
            Do you want to buy a Self Storage?
          </h3>
          <div className="text-lg font-normal pb-10 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc.
          </div>
          <Button intent={ButtonIntent.Primary}>Buy a Self Storage</Button>
        </div>
      </div>
    </div>
  );
};

export default WantStorageSection;
