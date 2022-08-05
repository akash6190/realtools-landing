import Banner from "../../components/Banner";
import { IssuesCard } from "./IssueCard";
import RefundReasons from "./RefundReasons";
import { SalesCard } from "./SalesCard";
import TopCustomersCard from "./TopCustomersCard";
import { ActiveUsers } from "./UsersCard";

const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <div className="grid grid-cols-12 gap-6">
        <SalesCard />
        <ActiveUsers />
        <IssuesCard />
        <TopCustomersCard />
        <RefundReasons />
      </div>
    </>
  );
};

export default HomePage;
