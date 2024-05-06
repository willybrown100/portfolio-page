
import React from "react";
import InvestmentTable from "./Statistics";
import Navbar from "./Navbar";
import Products from "./Products";
import Statistics from "./Statistics";

function Portfolio() {
  const className = "max-w-6xl  w-10/12 mt-10 py-8 m-auto";
 return (
 <>
  <Navbar/>
   <section className={`${className}`}>
     <h2 className="text-center">our porfolio</h2>
<Statistics/>
<Products/>
   </section>
 </>
 );
}

export default Portfolio
