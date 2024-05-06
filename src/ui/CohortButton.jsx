import React, { act, useState } from "react"
import {  HiOutlineLockClosed } from "react-icons/hi";

function CohortButton() {
  const [activeButtons,setActiveButtons]=useState(null)
 

  const handleClick =(buttonName)=>{
 setActiveButtons(buttonName)
  }


 return (
   <div className="bg-stone-200 font-semibold md:flex items-center gap-x-4 rounded-md p-2 hidden">
     <button
       onClick={() => handleClick("button1")}
       className={`${
         activeButtons === "button1" ? "bg-stone-50  px-2  rounded-md" : ""
       }`}
     >
       cohort 1&mdash;2022
     </button>

     <button
       className={`flex items-center gap-x-2 ${
         activeButtons === "button2" ? "bg-stone-50 px-2 rounded-md" : ""
       }`}
       onClick={() => handleClick("button2")}
     >
       cohort 2&mdash;2023{" "}
       <span>
         <HiOutlineLockClosed />
       </span>{" "}
     </button>
   </div>
 );
}

export default CohortButton
