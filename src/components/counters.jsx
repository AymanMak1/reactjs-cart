import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    //console.log("Counters - Rendered");
    const {
      onReset,
      counters,
      onDecrement,
      onDelete,
      onIncrement,
    } = this.props;
    return (
      <React.Fragment>
        <a
          href="#!"
          onClick={this.props.onReset}
          className="waves-effect waves-light btn blue darken-2"
        >
          Reset
        </a>
        <br />
        <br />
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            //value={counter.value}
            //id={counter.id}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
