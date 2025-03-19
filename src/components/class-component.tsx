import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log(
      "constructor (used when we create an instance of a component by rendering it from another component)"
    );
    this.state = {
      number: 1
    };
    this.changeNumber = this.changeNumber.bind(this);
  }

  static getDerivedStateFromProps(props) {
    console.log("getDerivedStateFromProps", props);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log(
      "componentDidMount (used for triggering fetch requests and setting state after response)"
    );
  }

  componentWillUnmount() {
    console.log(
      "componentWillUnmount (used for clearing up side effects like setInterval)"
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate (used for performance optimization to prevent unnecessary re-renders)"
    );
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.log("should update?", nextProps.number !== nextState.number);
    return nextProps.number !== nextState.number;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate (deprecated)");
    // console.log("nextProps", nextProps);
    // console.log("nextState", nextState);
  }

  // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  // for an example of probably the most common use case for maintaining scroll positioning: https://codesandbox.io/s/getsnapshotbeforeupdate-jl63r-jl63r?file=/src/ScrollingList.js
  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log(
      "ADVANCED - getSnapshotBeforeUpdate (non-deprecated version of componentWillUpdate). This is used for capturing information from the DOM before the rendered component is committed to the DOM (like scroll position). It's called after render() but before changes are committed to the DOM. Anything returned here will be accessible in componentDidUpdate"
    );
    return "from getSnapShotBeforeUpdate";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    // console.log("snapshot", snapshot);
  }

  changeNumber() {
    this.setState({
      number: Math.floor(Math.random() * 3)
    });
  }

  render() {
    console.log("render (used for updating the DOM)");
    return (
      <div>
        <h3>Class Component Demo</h3>
        Number: {this.state.number}
        <p>
          <button onClick={this.changeNumber}>Change Number</button>
        </p>
      </div>
    );
  }
}
