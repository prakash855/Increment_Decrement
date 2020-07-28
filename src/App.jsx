import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
const App = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("items can't go -ve");
      setNum(0);
    }
  };
  return (
    <>
      <div className="main-div">
        <div className="inner_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={incNum} className="btn_green">
              <AddIcon />
            </button>
            <button onClick={decNum} className="btn_red">
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
