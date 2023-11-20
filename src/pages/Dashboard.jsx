import React, { useState } from "react";
import DashbaordSidebar from "../components/feature/DashbaordSidebar";
import "../css/dashboard.css";
import { DndContext } from "@dnd-kit/core";
import Droppable  from "../components/Droppable";

const Dashboard = () => {
  const [dashboardItem, setDashboardItem] = useState([]);

  const handleOnDragEnd = (e) => {
    console.log("Drag end ----> ", e);
    const newItem = e.active.data.current?.title;
    console.log("New Item -----> ", newItem);
    if (e.over?.id !== "home" || !newItem) return;
    const temp = [...dashboardItem];
    console.log("Drag Temp -----> ", temp);
    temp.push(newItem);
    console.log("Temp with new Item -----> ", temp);
    setDashboardItem(temp);
  };

  return (
    <DndContext onDragEnd={handleOnDragEnd}>
      <div className="dashboard ">
        <div className="w-100 h-100 position-relative">
          <div className="w-100 h-100">
            <Droppable items={dashboardItem} />
          </div>
          <DashbaordSidebar />
        </div>
      </div>
    </DndContext>
  );
};

export default Dashboard;
