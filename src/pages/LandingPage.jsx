import LatestResearch from "../LandingSections/ResearchSection";
import StoriesSection from "../LandingSections/StoriesSection";
import Home from "../LandingSections/Home";
import MainContent from "../LandingSections/MainContent";
import NewsSection from "../LandingSections/NewsSection";
import BusinessSection from "../LandingSections/BusinessSection";
import GetStarted from "../LandingSections/GetStarted";
import Footer from "../components/Footer";
const LandingPage = () => {
  return (
    <>
      <Home />
      <MainContent />
      <NewsSection />
      <StoriesSection />
      <LatestResearch />
      <BusinessSection />
      <GetStarted />
      <Footer />
    </>
  );
};

export default LandingPage;
