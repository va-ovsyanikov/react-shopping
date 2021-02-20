import React from "react";


export const Colors = ({colors}) => {
  return (
    <div className="colors">
      {colors.map((color, index) => {
        return (
          <button style={{ backgroundColor: color }} key={index}></button>
        );
      })}
   </div> 
  );
};
