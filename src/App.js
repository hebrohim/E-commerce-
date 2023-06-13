import axios from "axios";
import { React, useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Categories from "./Components/Categories";



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

<Nav/>

<Categories/>
 
    </div>
  );
};

export default App;
