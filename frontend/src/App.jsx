import { useState } from 'react'
import './App.css'
import MainHeader from './components/Header/MainHeader.jsx';
import Product from "./components/ProductInfo/Product.jsx"
import Card from './components/Card/Card.jsx';
import Faq from './components/Faq/Faq.jsx';
import CardProducts from "./components/CardProducts/CardProducts.jsx"
import ReviewSection from './components/ReviewSection/ReviewSection.jsx';
import ReviewCard from './components/ReviewCard/ReviewCard.jsx';
import Footer from "./components/Footer/Footer.jsx";
import BottomBar from './components/BottomBar/BottomBar.jsx';
import SortFilter from './components/SortFilter/SortFilter.jsx';

function App() {
  return (
    <>
      <MainHeader />
      <Product />
      <Card />
      <Faq />
      <CardProducts/>
      <ReviewSection />
      <SortFilter/>
      <ReviewCard />
      <Footer />
      <BottomBar/>
    </>
  )
}

export default App
