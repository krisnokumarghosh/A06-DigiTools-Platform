
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import { ToastContainer } from 'react-toastify'
import Steps from './components/Steps/Steps'
import PricingSection from './components/PricingSection/PricingSection'
import Footer from './components/Footer/Footer'

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const productsPromise = fetchData();

  const [cart , setCart] = useState([]);
  
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>
      <Suspense>
      <Products 
      setCart={setCart}
      cart={cart}
      productsPromise={productsPromise}></Products>
      </Suspense>
      <Steps></Steps>
      <PricingSection></PricingSection>
      <Footer></Footer>




      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
