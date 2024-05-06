import React from "react"
function StatisticItem({item}) {
 const {Investment,Revenue,total,ConversionRate }=item
 return (
   <li className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
     <div className="flex flex-col">
       <span className="md:hidden">investment</span>
       <span className="font-semibold">{Investment}</span>
     </div>
     
     <div className="flex flex-col">
       <span className="md:hidden">Revenue</span>
       <span className="font-semibold">{Revenue}</span>
     </div>

     <div className="flex flex-col">
       <span className="md:hidden">total</span>
       <span className="font-semibold">{total}</span>
     </div>

     <div className="flex flex-col">
       <span className="md:hidden">ConversionRate</span>
       <span className="font-semibold">{ConversionRate}</span>
     </div>
   </li>
 );
}

export default StatisticItem
