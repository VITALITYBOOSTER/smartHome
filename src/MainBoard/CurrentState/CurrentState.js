import React from "react";

class CurrentState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.counterValue
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 0.1
    });
  }
  render() {
    return (
      <div className="current-state-wrapper" title={`Amount of ${this.props.type} consumed for this day`}>
        <div className='current-state-header'>
          <div>{this.props.headerText}</div>
          <div>
            <img className='current-state-wrapper-image' src={this.props.src}/>
          </div>
        </div>
        <div className="current-state-wrapper-values">
          {this.props.headerText != "Voltage"
            ? `${setTimeout(this.increment, 9000)} ${this.props.value}`
            : `${this.props.counterValue} ${this.props.value}`}
        </div>
      </div>
    );
  }
}

export default CurrentState;
