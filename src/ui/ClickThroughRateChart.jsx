

import React, {  } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";






const COLORS = ["#000", ];

const ClickThroughRateChart = ({ valu }) => {
 
  const data = [{ name: "Value", value:valu}];

  return (
    <ResponsiveContainer>
    <PieChart >
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={25}
    innerRadius={15}
        fill="#000"
     
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label value={valu} position="center" fill="#000" />
      </Pie>

    </PieChart>
        </ResponsiveContainer>
  );
};

export default ClickThroughRateChart;



