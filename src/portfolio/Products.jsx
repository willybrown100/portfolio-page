
import React from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../ui/Filter";
import SortBy from "../ui/SortBy";

import ProductItem from "./ProductItem";
import useProductsData from "./useProductsData";
import CohortButton from "../ui/CohortButton";
import Loader from "../ui/Loader"

function Products() {
  const { data, isLoading } = useProductsData();
  console.log(data);
  const [searchParams] = useSearchParams();
  //1) filter==
  const filteredValue = searchParams.get("month") || "All";
  console.log(filteredValue);
  let filteredData;
  if (filteredValue === "All") filteredData = data;
  if (filteredValue === "january")
    filteredData = data.filter((item) => item.month === "January");
  if (filteredValue === "february")
    filteredData = data.filter((item) => item.month === "February");
  if (filteredValue === "march")
    filteredData = data.filter((item) => item.month === "March");
  if (filteredValue === "april")
    filteredData = data.filter((item) => item.month === "April");
  if (filteredValue === "may")
    filteredData = data.filter((item) => item.month === "May");
  if (filteredValue === "june")
    filteredData = data.filter((item) => item.month === "June");
  if (filteredValue === "july")
    filteredData = data.filter((item) => item.month === "July");
  if (filteredValue === "august")
    filteredData = data.filter((item) => item.month === "August");
  if (filteredValue === "september")
    filteredData = data.filter((item) => item.month === "September");
  if (filteredValue === "october")
    filteredData = data.filter((item) => item.month === "October");
  if (filteredValue === "november")
    filteredData = data.filter((item) => item.month === "November");
  if (filteredValue === "december")
    filteredData = data.filter((item) => item.month === "December");

  //2) sortBy==\
  const sortBy = searchParams.get("sort") || "";
  console.log(sortBy)
  if (sortBy === "Ascending") filteredData.sort((a, b) =>  {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  if (sortBy === "Descending") filteredData.sort((a, b) =>
     {
      if(a.name < b.name)return 1
      if(a.name>b.name)return -1
return 0
     }
);

  return (
    <section>
      <div className="flex justify-between my-6">
        <CohortButton />
        <div className="flex flex-col md:flex-row gap-2 space-x-2">
          <Filter />
          <SortBy />
        </div>
      </div>
      <div>
        <div className=" my-4 rounded-md">
          <div className="hidden md:grid md:grid-cols-4  gap-4">
            <div className="font-semibold">product</div>
            <div className="font-semibold">financials</div>
            <div className="font-semibold">marketting</div>
            <div className="font-semibold">sales</div>
          </div>
          {isLoading ? (
            <Loader/>
          ) : (
            ""
          )}
          <ul className="">
            {filteredData.map((item, index) => (
              <div className="flex gap-2">
                <span className="font-semibold">{index + 1}</span>
                <ProductItem item={item} key={index} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

   
export default Products
