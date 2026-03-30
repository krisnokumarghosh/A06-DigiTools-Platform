
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

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
    </>
  )
}

export default App
