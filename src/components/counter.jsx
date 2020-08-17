import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    //console.log("prevProps", prevProps);
    //console.log("prevState", prevState);
  }
  componentWillUnmount() {
    //console.log("Component Unmount");
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeStyle() {
    let classes = "new badge ";
    classes +=
      this.props.counter.value === 0 ? "grey darken-2" : "light-blue darken-1";
    return classes;
  }

  render() {
    //console.log("Counter - Rendered");
    //console.log("props", this.props);
    let style = {
      margin: "7px 14px 0 0",
      fontWeight: "700",
      minWidth: "0rem",
      float: "left",
    };

    return (
      <React.Fragment>
        <span
          className={this.getBadgeStyle()}
          data-badge-caption=""
          style={style}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn-floating pulse waves-effects green darken-3 "
          style={{ marginRight: "16px" }}
        >
          <i className="material-icons">add_shopping_cart</i>
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn-floating waves-effects yellow darken-3 "
          style={{ marginRight: "16px" }}
        >
          <i className="material-icons">remove</i>
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-floating waves-effects red darken-3 "
        >
          <i className="material-icons">delete_forever</i>
        </button>
        <br /> <br />
      </React.Fragment>
    );
  }
}

export default Counter;
