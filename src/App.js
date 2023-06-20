import axios from "axios";
import { React, useState, useEffect } from "react";
import Categories from "./Components/Categories";
import Hero from "./Components/Hero";
import Nav from "./Components/MobileNavBar";

const baseURL = "https://api.escuelajs.co/api/v1/products";

const App = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);

  return (
    <div>
      <Nav />

      <Categories />
      <Hero />
    </div>
  );
};

export default App;
