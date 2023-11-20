import React from "react";
import { Draggable } from "../Draggable";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";

const DashbaordSidebar = () => {
  return (
    <div className="position-absolute top-0 end-0">
      <button
        className="btn btn-primary m-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-menu-button-fill"
          viewBox="0 0 16 16"
          color="white"
        >
          <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h8A1.5 1.5 0 0 0 11 3.5v-2A1.5 1.5 0 0 0 9.5 0h-8zm5.927 2.427A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>

      <div
        className="offcanvas offcanvas-end "
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="dashboard-sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark  h-100  overflow-scroll">
            <a
              href="/"
              className=" d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Draggable id="barChart" key="barChart">
                <BarChart />
              </Draggable>
              <Draggable id="lineChart" key="lineChart">
                <LineChart />
              </Draggable>
              <Draggable id="areaChart" key="areaChart">
                <AreaChart />
              </Draggable>
              <Draggable id="pieChart" key="pieChart">
                <PieChart />
              </Draggable>
              <Draggable id="doughnutChart" key="doughnutChart">
                <DoughnutChart />
              </Draggable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbaordSidebar;
