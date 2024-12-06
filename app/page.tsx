import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import Categories from "./components/Categories";
import BestSales from "./components/BestSales";
import Offer from "./components/Offer";
import Products from "./products/page";
import Featured from "./components/Featured";
import Services from "./components/Services"; 
import Footer from "./components/Footer";

function page() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Hero></Hero>
      <Sales></Sales>
      <Categories></Categories>
      <BestSales></BestSales>
      <Offer></Offer>
      <Products></Products>
      <Featured></Featured>
      <Services></Services>
      <Footer></Footer>
    </div>
  )
}

export default page;