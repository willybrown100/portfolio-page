
import React from "react";
import useStatistics from "./useStatistics";
import StatisticItem from "./StatisticItem";
function Statistics() {
 const {data=[],isLoading}=useStatistics()
 console.log(data)
 return (
   <div className="bg-stone-200 p-4 rounded-md ">
     <div className="hidden md:grid  md:grid-cols-4 gap-2 text-stone-600 text-center">
       <div>investment</div>
       <div>revenue</div>
       <div>Active users</div>
       <div>conversion rate</div>
     </div>

     {data.map((item) => (
       <StatisticItem item={item} />
     ))}
   </div>
 );
}

export default Statistics
