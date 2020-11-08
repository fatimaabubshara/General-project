import React from "react";
function TabSelector(props) {
  return (
    <div className="TabSelector">
      <button
        id="addFood"
        onClick={props.handleChangeTab}
        className={props.activeId === "addFood" ? "active" : ""}
      >
        Add Food
      </button>
      <button
        id="allFood"
        onClick={props.handleChangeTab}
        className={props.activeId === "allFood" ? "active" : ""}
      >
        All Food
      </button>
      <button
        id="addType"
        onClick={props.handleChangeTab}
        className={props.activeId === "addType" ? "active" : ""}
      >
        ADD Type
      </button>
    </div>
  );
}

export default TabSelector;
