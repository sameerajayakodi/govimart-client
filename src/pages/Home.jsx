import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
