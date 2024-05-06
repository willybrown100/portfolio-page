
import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


// const StyledFilter = styled.div`
//   border: 1px solid var(--color-grey-100);
//   background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-sm);
//   border-radius: var(--border-radius-sm);
//   padding: 0.4rem;
//   display: flex;
//   gap: 0.4rem;
// `;

// const FilterButton = styled.button`
//   background-color: var(--color-grey-0);
//   border: none;

//   ${(props) =>
//     props.active &&
//     css`
//       background-color: var(--color-brand-600);
//       color: var(--color-brand-50);
//     `}

//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;
//   /* To give the same height as select */
//   padding: 0.44rem 0.8rem;
//   transition: all 0.3s;

//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;
function Filter() {
   const [month, setMont] = useState("january");
  const [searchParams, setSearchParams] = useSearchParams();
  // const currentFilter = searchParams.get(filterField) || options[0].value;
  const handleClick = function (e) {
    searchParams.set("month", e.target.value);
    setSearchParams(searchParams);
    setMont(e.target.value)
  };
  return (
    <div className="border-2 border-stone-800 rounded-md flex items-center bg-white px-2 sm:px-4">
        <span className="text-stone-600">Month:</span>
      <select value={month} className=" py-2 px-2 md:px-3 border-none outline-none" onChange={handleClick}>
          <option value="All" className="capitalize font-semibold"> All</option>
          <option value="january" className="capitalize font-semibold"> January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
      </select>
    </div>
  );
}

export default Filter;
