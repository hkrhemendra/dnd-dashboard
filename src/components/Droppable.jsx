import React from "react";
import { useDroppable } from "@dnd-kit/core";
import BarChart from "./feature/BarChart";
import LineChart from "./feature/LineChart";
import AreaChart from "./feature/AreaChart";
import PieChart from "./feature/PieChart";
import DoughnutChart from "./feature/DoughnutChart";

const Droppable = (props) => {
  const { setNodeRef } = useDroppable({
    id: "home",
  });

  let {items} = props
  items = Array.from(new Set(items))

  const handleViewChart = (item) => {
    if (item === "barChart") {
      return <BarChart />;
    } else if (item === "lineChart") {
      return <LineChart />;
    } else if (item === "areaChart") {
      return <AreaChart />;
    } else if (item === "pieChart") {
      return <PieChart />;
    } else if (item === "doughnutChart") {
      return <DoughnutChart />;
    } else {
      return <div>nothing here</div>;
    }
  };

  return (
    <div ref={setNodeRef} className="droppable overflow-scroll w-100 h-100">
      {items.map((item, index) => (
        <div className="chart-wrapper" key={`${item}-${index}`}>
          {" "}
          {handleViewChart(item)}{" "}
        </div>
      ))}
    </div>
  );
};

export default Droppable;
