import React, { Component } from "react";
import PropTypes from "prop-types";
import ArrayController from "./ArrayController";
import "bootstrap/dist/css/bootstrap.css";

// settings
const LEN = 100;
const MAX = 500;
const MIN = 5;
const SPD = 100; // multiplier
const DELAY = 1 * (1 / SPD); // ms

const BAR_COL_DFLT = "AliceBlue"; // default colour
const BAR_COL_SWAP = "Orchid"; // colour when swapping
const BAR_COL_COMP = "LightSalmon"; // colour when comparing
const BAR_COL_CORR = "SpringGreen"; // colour when elem is in place
const BAR_COL_TEST = "MistyRose"; // colour for debugging purpose

class AlgorithmVisualiser extends React.Component {
  state = {
    length: LEN,
    array: [],
    animations: [],
    solution: [],
  };

  render() {
    return (
      <div className="App">
        <ArrayController
          onReset={this.resetArray}
          onSort={this.sortArray}
          onBubbleSort={this.bubbleSort}
          onMergeSort={this.mergeSort}
          onTestCss={this.testCss}
          onTestCss2={this.testCss2}
          onTest={this.handleTest}
          onChangeLength={this.handleChangeLength}
        />
        <div className="array-container">
          <div
            className="array-container-pillar"
            key="pillar"
            style={{ height: `${MAX}px` }}
          ></div>
          {this.state.array.map((num, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${num}px` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  // reset the array when the component is created
  componentDidMount = () => {
    this.resetArray();
  };

  handleTest = () => {
    console.log("w", window.innerWidth);
    console.log("h", window.innerHeight);
  };
  // initialises the array and fill it with random numebers
  resetArray = () => {
    const array = this.generateArray();
    const solution = [...array].sort((a, b) => a - b);
    this.setState({ array, animations: [], solution });
    this.drawInPlace();
    this.setState({ array, animations: [], solution });
    this.drawInPlace();
  };

  setLength = (newLen) => {
    this.state.length = newLen;
    this.setState(this.state);
  };

  generateArray = () => {
    const array = [];
    let n = this.state.length;
    for (var i = 0; i < n; i++) {
      array.push(this.randIntBetween(MIN, MAX));
    }
    return array;
  };

  // generates an integer between min and max
  // from stackoverflow
  //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  randIntBetween = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // sorts the array ascendingly
  sortArray = () => {
    let { array } = this.state;
    console.log(array);
    array = array.sort((a, b) => a - b);
    this.setState({ array });
    this.drawInPlace();
  };

  // tests something about the css
  testCss = () => {
    this.changeColour("MistyRose");
  };

  // tests something about the css
  testCss2 = () => {
    this.changeColour(BAR_COL_DFLT);
  };

  /////////////////////////Algorithms////////////////////////////

  // merges two sorted arrays
  merge = (a, b) => {
    let i = 0,
      j = 0,
      m = a.length,
      n = b.length,
      result = [];
    while (i !== m && j !== n) {
      if (a[i] > b[j]) {
        result.push(b[j]);
        j++;
      } else {
        result.push(a[i]);
        i++;
      }
    }
    if (i !== m) {
      result = result.concat(a.slice(i, undefined));
    }
    if (j !== n) {
      result = result.concat(b.slice(j, undefined));
    }
    return result;
  };

  // wrapper function for merge sort
  mergeSort = () => {
    let { array } = this.state;
    const arrayCopy = [...array];
    this.mergeSortInPlace(arrayCopy, 0, arrayCopy.length);
    this.animate();
  };

  // sorts an array using merge sort, uses auxiliary array
  mergeSort_ = (array) => {
    let n = array.length;

    if (n <= 1) {
      return array;
    }

    let mid = Math.floor(n / 2);

    let left = array.slice(undefined, mid),
      right = array.slice(mid, undefined),
      sortedLeft = this.mergeSort_(left),
      sortedRight = this.mergeSort_(right);
    return this.merge(sortedLeft, sortedRight);
  };

  // array : [x, x, .....x,| ..... x, x]
  //         l          mid           r
  // l, mid and r are INDICES OF THE LAST ELEMENT OF THE TWO SUB ARRAYS
  // [l...mid] and [mid+1, r] are sorted
  // [0...l-1] is the merged
  mergeInPlace = (array, l, mid, r) => {
    let i = l,
      j = mid + 1;
    // console.log("merging: ", array.slice(l, mid), array.slice(mid + 1, r + 1));
    // while there are elems in both unmerged arrays
    while (i <= mid && j <= r) {
      // if right is smaller, move all elems from i to j to the right by 1
      if (this.doCompare(array, i, j, true) === 1) {
        let k = j;
        while (k > i) {
          this.doSwap(array, k, k - 1, true);
          k--;
        }
        // update pointers;
        mid++;
        i++;
        j++;
      } else {
        // left < right
        i++;
      }
    }
    return array;
  };

  // sorts an array using merge sort, does not use auxiliary array
  // array : |[x, x, ...... x, x]|
  //         l                   r
  mergeSortInPlace = (array, l, r) => {
    let len = r - l;
    if (len <= 1) {
      return array;
    }
    let mid = Math.floor((l + r) / 2);

    this.mergeSortInPlace(array, l, mid);
    this.mergeSortInPlace(array, mid, r);

    return this.mergeInPlace(array, l, mid - 1, r - 1);
  };

  quickSort = () => {};

  bubbleSort_ = (array) => {
    let swapped = true;
    let passes = 0;
    let n = this.state.length;
    while (swapped && passes < n) {
      passes++;
      swapped = false;
      // for each element, compare with the next
      for (var i = 0; i < array.length - 1; i++) {
        let j = i + 1;
        // if wrong order, swap
        if (this.doCompare(array, i, j, true) === 1) {
          this.doSwap(array, i, j, true);
          swapped = true;
        }
      }
    }
    if (this.testSorted(array)) {
    } else {
    }
    return array;
  };

  bubbleSort = () => {
    let sorted = this.bubbleSort_([...this.state.array]);
    this.animate();
  };

  doCompare = (array, i, j, newAnimation) => {
    if (newAnimation) {
      this.addCompare(i, j);
    }
    let delta = array[i] - array[j];
    if (delta < 0) {
      return -1;
    }
    if (delta > 0) {
      return 1;
    }
    return 0;
  };

  // swaps two elements in an array, a b are indices
  doSwap = (array, i, j, newAnimation) => {
    if (newAnimation) {
      this.addSwap(i, j);
    }
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
  };

  // checks if the arary is sorted
  testSorted = (array) => {
    let copy = [...array];
    copy.sort((a, b) => a - b);
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== copy[i]) {
        console.log(array[i], " != ", copy[i], "at", i);
        return false;
      }
    }
    return true;
  };

  // checks if two arrays contain the exact same things in the same order
  equalArray = (a, b) => {
    if (a.length !== b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  };

  // generates 500 arrays based on the setting, see if the arrays sorted by the
  // native algorithm is the same as sorted by the sortFn
  debugSort = (sortFn, args) => {
    const NTEST = 500;
    for (var i = 0; i < NTEST; i++) {
      let a = this.generateArray(),
        b = [...a],
        nativeSorted = a.sort((a, b) => a - b),
        customSorted = sortFn(b, ...args);
      if (this.equalArray(nativeSorted, customSorted)) {
        console.log("sort successful");
      } else {
        return false;
      }
    }
    return true;
  };
  /////////////////helpers for visualisation/////////////////////
  // idea: compute and generate a list of animations before executing the
  // animations, this way the animations can be played back and even in reverse
  // format for animation : array of objects each containing one animation
  // {pointAt: [a], swap: [a, b], compare: [a, b]}\

  // executes the list of animations
  animate = () => {
    let { animations } = this.state;
    animations.reverse();
    this.setState({ animations });
    this.animate_();
  };

  // recursive
  animate_ = () => {
    let { array, animations } = this.state;
    this.drawInPlace();
    if (animations.length === 0) {
      return;
    }
    animations.pop().animate(this);
    setTimeout(() => {
      this.animate_();
    }, DELAY);
  };

  // animation for a pointer
  animatePointAt = () => {};

  // animation for a swap
  animateSwap = (a, b) => {
    let colA = this.getColour(a),
      colB = this.getColour(b);
    this.changeColour(BAR_COL_SWAP, [a, b]);
    this.doSwap(this.state.array, a, b);
    this.setState(this.state);
    setTimeout(() => {
      this.changeColour(colA, [a]);
      this.changeColour(colB, [b]);
    }, DELAY);
  };

  // animation for a comparison
  animateCompare = (a, b) => {
    let colA = this.getColour(a),
      colB = this.getColour(b);
    this.changeColour(BAR_COL_COMP, [a, b]);
    setTimeout(() => {
      this.changeColour(colA, [a]);
      this.changeColour(colB, [b]);
    }, DELAY);
  };

  // adds a pointAt animation
  addPointAt = (idx) => {
    this.state.animations.push({ pointAt: [idx] });
  };

  // adds a swap animation
  addSwap = (a, b) => {
    this.state.animations.push({
      swap: [a, b],
      animate: (parent) => {
        parent.animateSwap(a, b);
      },
    });
  };

  // adds a comparison animaton
  addCompare = (a, b) => {
    this.state.animations.push({
      compare: [a, b],
      animate: (parent) => {
        parent.animateCompare(a, b);
      },
    });
  };

  // pauses for a certain time, in miliseconds
  sleep = (time) => {
    let scaledTime = time * SPD;
    let date = new Date();
    let curDate = null;
    do {
      curDate = new Date();
    } while (curDate - date < scaledTime);
  };
  // resets the animation array
  resetAnimation = () => {};

  // checks for bars that are in the right place and change their colour
  drawInPlace() {
    let { array, solution } = this.state;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === solution[i]) {
        this.changeColour(BAR_COL_CORR, [i]);
      } else {
        this.changeColour(BAR_COL_DFLT, [i]);
      }
    }
  }
  // changes the colour of the bars specified in indices to newColour
  // default indices is all of the array
  changeColour = (newColour, indices) => {
    let bars = document.getElementsByClassName("array-bar");
    if (indices === undefined) {
      for (var i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = newColour;
      }
    } else {
      for (var i = 0; i < indices.length; i++) {
        bars[indices[i]].style.backgroundColor = newColour;
      }
    }
  };

  getColour = (i) => {
    let bars = document.getElementsByClassName("array-bar");
    return bars[i].style.backgroundColor;
  };

  handleChangeLength = (evnt) => {
    let newLen = parseInt(evnt.target.value);
    this.setLength(newLen);
    this.resetArray();
  };
}
export default AlgorithmVisualiser;
