import axios from "axios";
import { React, useState, useEffect,createContext } from "react";
import Categories from "./Components/Categories";
import Hero from "./Components/Hero";
import Nav from "./Components/MobileNavBar";
import DisplayProducts from "./Components/DisplayProducts";
const baseURL = "https://api.escuelajs.co/api/v1/products";

export let Context = createContext(null)
const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);


  return (
    <div>
      <Context.Provider value={products}> 
      <Nav />
      <Categories />
      <Hero />
      <DisplayProducts/>
      </Context.Provider>

    </div>
  );
};

export default App;
