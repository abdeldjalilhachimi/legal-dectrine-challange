import React from "react";

const Btn = () => {
  const handelClick = () => {
    console.log("Hi");
  
  };
  return (
    <div className="run-btn">
      <button onClick={handelClick}>Run</button>
    </div>
  );
};

export default Btn;
