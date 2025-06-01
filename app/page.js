import Banner from '../components/Front-site/home/Banner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import CategorySlider from '../components/Front-site/home/Catagory';
import GiftComboSlider from '../components/Front-site/home/Gift';
import PopularProducts from '../components/Front-site/home/Product';
import DailyBestSells from '../components/Front-site/home/DailyBestsell';
import DealsOfTheDay from '../components/Front-site/home/TodyOffer';
import ProductSection from '../components/Front-site/home/Ttrt';
import SubscriptionSection from '../components/Front-site/home/Subscrib';


export default function HomePage() {
  return (
    <div>
      <Banner />
      <CategorySlider />
      <GiftComboSlider />
      <PopularProducts />
      <DailyBestSells />
      <DealsOfTheDay />
      <ProductSection />
      <SubscriptionSection />
      
    </div>
  );
}
