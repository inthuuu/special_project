import React from "react";
import '../expandButton/ExpandableButton.css'

export const ExpendableButton = ({ isOpen, toggle , label}: {isOpen:any, toggle: any, label: any}) => {
  return (
    <button className= "expand" onClick={toggle}>
      <span className="material-symbols-rounded"
      style={{
        transition: "all 0.25s",}}
       >
      <div className="button">
        <center>{label}</center>
      </div>
      </span>
    </button>
  );
};

