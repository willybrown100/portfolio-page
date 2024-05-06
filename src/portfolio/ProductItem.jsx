import React from "react";
// import ChartComponent from "../ui/ChartComponent";
import { Chart } from "chart.js";
import ClickThroughRateChart from "../ui/ClickThroughRateChart";
import SalesChart from "./SalesChart";
import useProductsData from "./useProductsData";


function ProductItem({ item }) {
  const {isLoading}=useProductsData()
  const {
    image,
    image2,
    name,
    text,
    total,
    value,
number,
clickrate,
totalnum,
sellingcost,
  } = item;


  return (
      <li className="md:grid md:grid-cols-4  gap-4 ">
        <div>
          <h5 className="md:hidden font-semibold mb-0">product</h5>
          <div className="bg-stone-100 p-4  mb-2 rounded-md ">
            <div className="flex items-center gap-2">
              <img
                src={image}
                alt="img"
                className="h-[4rem] object-cover max-w-[4rem]"
              />
              <h5 className="font-semibold">{name}</h5>
            </div>
            <p className="text-stone-600 text-sm">{text}</p>
          </div>
        </div>

        <div>
          <h5 className="md:hidden mb-0 font-semibold">financials</h5>
          <div className="bg-stone-100 mb-2 p-4 rounded-md">
            <div className="flex justify-between">
              <span>customer</span>
              <span>revenue</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">{total}</span>
              <span className="font-semibold">{value}</span>
            </div>
            <p>site visit</p>
            <div>
              <img src={image2} alt="image2" />
            </div>
          </div>
        </div>

        <div>
          <h5 className="md:hidden mb-0 font-semibold">marketting</h5>
          <div className=" p-4 mb-2 bg-stone-100 space-y-2 rounded-md">
            <div className="flex justify-between">
              <span>subscribers</span>
              <span className="font-semibold">{totalnum}</span>
            </div>
            <div className="flex justify-between">
              <span>website traffic</span>
              <span className="font-semibold">{number}</span>
            </div>
            <div className="flex justify-between items-center gap-x-4   ">
              <span>clicthroughrate</span>
              <span className="font-semibold h-[4rem] w-[4rem] ">
                <ClickThroughRateChart valu={Number(clickrate)} />
              </span>
            </div>
          </div>
        </div>

        <div>
          <h5 className="md:hidden mb-0 font-semibold">sales</h5>
          <div className="flex flex-col text-center p-4 mb-2 bg-stone-100 ">
            <span>cost of selling</span>
            <span className="font-semibold h-[7rem] w-full">
              <SalesChart valu={Number(sellingcost)} />
            </span>
          </div>
        </div>
      <div className="border my-4 border-stone-500 sm:hidden"></div>
      </li>
 
  );
}

export default ProductItem;
