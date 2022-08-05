import HeroSection from "./HeroSection";
import PublicLayout from "../../layouts/PublicLayout";
import FeaturedSection from "./FeaturedSection";
import ActiveStorageSection from "./ActiveStorageSection";
import HaveStorageSection from "./HaveStorageSection";
import WantStorageSection from "./WantStorageSection";
import QueriesSection from "./QueriesSection";
import LearnSection from "./LearnSection";

const HomePage: React.FC = () => {
  return (
    <PublicLayout transparentBar>
      <HeroSection />
      <FeaturedSection />
      <ActiveStorageSection />
      <HaveStorageSection />
      <WantStorageSection />
      <LearnSection />
      <QueriesSection />
    </PublicLayout>
  );
};

export default HomePage;
