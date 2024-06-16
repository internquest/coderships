import FirstCard from "@/components/Features/FeatureCards/FirstCard";
import SecondCard from "@/components/Features/FeatureCards/SecondCard";
import ThirdCard from "@/components/Features/FeatureCards/ThirdCard";
import Header from "@/components/Features/Header";
import MainFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";

const FeaturesPage = () => {
  return (
    <>
      <title>Coderships - Features</title>
      <Navbar />
      <Header />
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <MainFooter />
    </>
  );
};

export default FeaturesPage;
