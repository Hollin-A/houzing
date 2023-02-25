import "./App.css";

import { Navbar } from "./component/Navbar.js"
import { Footer } from "./component/Footer.js"
import ScrollToTop from "./component/ScrollToTop.js"

import { Header } from "./container/Header.js"
import { FeaturedProperties } from "./container/FeaturedProperties.js"
import { WhyChooseUs } from "./container/WhyChooseUs.js"
import { ExploreProperties } from "./container/ExploreProperties.js"
import { Trending } from "./container/Trending.js"
import { FAQ } from "./container/FAQ.js"
import { ContactForm } from "./container/ContactForm.js"
import { CustomerReview } from "./container/CustomerReview.js"

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <FeaturedProperties/>
    <WhyChooseUs/>
    <ExploreProperties/>
    <Trending/>
    <FAQ/>
    <CustomerReview/>
    <ContactForm/>
    <Footer/>
    <ScrollToTop/>
    </>
  );
}

export default App;
