import React, { useState, useRef } from "react";

function Counter(props) {
  let [count, changeCount] = useState(props.counterValue);
  const domEl = useRef(null);
  function change() {
    if (count >= 0 && count <= 100) {
      if (props.HeaderText == "Light") {
        if (count < 15) {
          domEl.current.style.backgroundColor = "#303030";
          domEl.current.style.color = "#ffffff";
        } else if (count > 14 && count <= 30) {
          domEl.current.style.backgroundColor = "#3d3d3d";
          domEl.current.style.color = "#ffffff";
        } else if (count > 30 && count < 45)
          domEl.current.style.backgroundColor = "#525252";
        else if (count > 45 && count < 60)
          domEl.current.style.backgroundColor = "#707070";
        else if (count > 45 && count < 60)
          domEl.current.style.backgroundColor = "#a8a8a8";
        else if (count > 60 && count < 75) {
          domEl.current.style.backgroundColor = "#d1d1d1";
        } else {
          domEl.current.style.backgroundColor = "#ffffff";
          domEl.current.style.color = "black";
        }
      } else {
        if (count < 16) domEl.current.style.backgroundColor = "#92e2e9";
        if (count > 15 && count < 26)
          domEl.current.style.backgroundColor = "#589d62";
        if (count > 26 && count < 34)
          domEl.current.style.backgroundColor = "#ffc357";
        if (count > 34) domEl.current.style.backgroundColor = "#fd742d";
      }
    }
    else{
      if(count < 0) {
        alert('Значение слишком маленькое, к сожалению, дальше уменьшать невозможно')
        changeCount(++count);
      }
      if(count > 100) {
        alert('Значение слишком большое, к сожалению, дальше увеличивать невозможно')
        changeCount(--count);
      }
    }
  }
  return (
    <div className="counter-wrapper" ref={domEl}>
      <div className="ч ">{props.HeaderText}</div>
      <div>
        {props.HeaderText == "Light"
          ? count + " %"
          : `${count} °С / ${(count * (9 / 5) + 32).toFixed(1)} F`}
      </div>
      <hr></hr>
      <div className="counter-buttons" onClick={change}>
        <div onClick={() => changeCount(++count)}>
          <img
            src="https://www.freeiconspng.com/uploads/green-arrow-png-7.png"
            className="counter-button-image"
          ></img>
        </div>
        <div
          onClick={() => {
            changeCount(--count);
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/768px-Red_Arrow_Down.svg.png"
            className="counter-button-image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Counter;
