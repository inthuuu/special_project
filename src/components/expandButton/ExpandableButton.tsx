import React from "react";
import '../expandButton/ExpandableButton.css'

export const ExpendableButton = ({ isOpen, toggle }: {isOpen:any, toggle: any}) => {
  return (
    <button className= "expand" onClick={toggle}>
      <span className="material-symbols-rounded"
      style={{
        // transform: `rotate(${isOpen ? 180 : 0}deg)`,
        transition: "all 0.25s",}}
       >
      <div className="button">
        <center>เลือกสัปดาห์ที่สอน</center>
      </div>
      </span>
    </button>
  );
};

