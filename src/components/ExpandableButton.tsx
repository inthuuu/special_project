import React from "react";

export const ExpendableButton = ({ isOpen, toggle }: {isOpen:any, toggle: any}) => {
  return (
    <button onClick={toggle}>
      <span className="material-symbols-rounded"
      style={{
        transform: `rotate(${isOpen ? 180 : 0}deg)`,
        transition: "all 0.25s",}}
      >
      expand_more
      </span>
    </button>
  );
};