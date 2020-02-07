import React from "react";
import Counter from "./Counters/Counter";
import PersonPresence from "./PersonPresence/PersonPresence";
import CurrentState from "./CurrentState/CurrentState";

function MainBoard(props) {
  return (
    <div className="main-board">
      <div className="situation-board">
        <div className="counters-board">
          <Counter counterValue={21} HeaderText="Temrepature" />
          <Counter counterValue={43} HeaderText="Light" />
          <Counter counterValue={15} HeaderText="Floor Temperature" />
        </div>
        <div className="current-state-board">
          <CurrentState
            type="water"
            src="http://clipart-library.com/images_k/water-droplet-transparent-background/water-droplet-transparent-background-16.png"
            headerText="Water/day"
            counterValue={2}
            value="L"
          />
          <CurrentState
          type='electricity'
            src="https://cdn2.iconfinder.com/data/icons/digital-and-internet-marketing-4-1/50/151-512.png"
            headerText="Electricity"
            counterValue={2}
            value="kV"
          />
          <CurrentState
          type='electricity'
            src="https://png.pngtree.com/svg/20170227/d12009ee9c.svg"
            headerText="Gas"
            counterValue={5}
            value="m³"
          />
          <CurrentState
            type='voltage'
            src="https://www.pngrepo.com/download/247467/high-voltage-warning.png"
            headerText="Voltage"
            counterValue={218}
            value="V"
          />
        </div>
      </div>
      <div className="presence-board">
        <PersonPresence
          type="people"
          src="https://image.flaticon.com/icons/png/512/15/15767.png"
          nums="1 4"
        />
        <PersonPresence
          type="pets"
          src="https://png.pngtree.com/svg/20160805/adorable_pet_1197472.png"
          nums="1 2"
        />
      </div>
    </div>
  );
}

export default MainBoard;
