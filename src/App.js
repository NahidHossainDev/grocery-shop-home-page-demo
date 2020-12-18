import './App.css';
import Header from './Component/Header/Header';
import Nav1 from "./Component/Header/NavBarContainer/Nav1"
import Nav2 from "./Component/Header/NavBarContainer/Nav2";
import CarouselContainer from './Component/CarouselContainer/CarouselContainer';
import Features from './Component/Features/Features';
import BestSeller from './Component/BestSeller/BestSeller';
import TopCategory from './Component/TopCategory/TopCategory';
import TopProducts from './Component/TopProducts/TopProducts';
import Services from './Component/Services/Services';
import Video from './Component/Video/Video';
import Review from './Component/CustomerReview/Review';
import Brands from './Component/Brands/Brands';
import Articles from './Component/Articles/Articles';
import Footer from './Component/Footer/Footer';
import FooterInfo from './Component/Footer/FooterInfo';
import { createContext } from 'react';
import { useState } from 'react';

export const ContextElement = createContext()

function App() {
  const [addToCart, setAddToCart] = useState([])
  return (
    <ContextElement.Provider value={[addToCart, setAddToCart]}>
      <Header />
      <Nav1 />
      <Nav2 />
      <CarouselContainer />
      <Features />
      <BestSeller />
      <TopCategory />
      <TopProducts />
      <Services />
      <Video />
      <Review />
      <Brands />
      <Articles />
      <FooterInfo />
      <Footer />
    </ContextElement.Provider>
  );
}

export default App;
