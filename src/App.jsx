
import { Suspense } from 'react'
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
  
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense>
      <Products productsPromise={productsPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
