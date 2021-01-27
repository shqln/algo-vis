import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
class ArrayController extends React.Component {
  render() {
    return (
      <div className="array-controller">
        <div className="array-controller-options">
          <button
            onClick={this.props.onReset}
            className="btn btn-warning btn-sm m-2"
            id="btn-reset"
          >
            RESET
          </button>
        </div>
        <div className="array-controller-options">
          <button
            onClick={this.props.onSort}
            className="btn btn-primary btn-sm m-2"
            id="btn-sort1"
          >
            Sort!
          </button>
        </div>
        <div className="array-controller-options">
          <button
            onClick={this.props.onBubbleSort}
            className="btn btn-primary btn-sm m-2"
            id="btn-sort2"
          >
            Bubble Sort
          </button>
        </div>
        <div className="array-controller-options">
          <button
            onClick={this.props.onMergeSort}
            className="btn btn-primary btn-sm m-2"
            id="btn-sort3"
          >
            Merge Sort
          </button>
        </div>
        <div className="array-controller-options">
          <button
            onClick={this.props.onTestCss}
            className="btn btn-info btn-sm m-2"
            id="btn-test1"
          >
            MistyRose
          </button>
        </div>
        <div className="array-controller-options">
          <button
            onClick={this.props.onTestCss2}
            className="btn btn-info btn-sm m-2"
            id="btn-test2"
          >
            AliceBlue
          </button>
        </div>
        <div className="array-controller-options">
          <button
            onClick={this.props.onTest}
            className="btn btn-warning btn-sm m-2"
            id="btn-test3"
          >
            Test MergeSort
          </button>
        </div>
        <div className="array-controller-options">
          <label for="array-length" className="form-label">
            Array Length
          </label>
          <input
            type="range"
            className="form-range"
            id="array-length-range"
          ></input>
        </div>
      </div>
    );
  }
}

export default ArrayController;
