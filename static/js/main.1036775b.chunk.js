(this.webpackJsonpalgo=this.webpackJsonpalgo||[]).push([[0],{16:function(t,e,r){},17:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r(1),o=r.n(a),s=r(9),i=r.n(s),c=r(2),l=r(3),u=r(4),b=r(5),m=r(7),d=r(6),h=(r(15),function(t){Object(m.a)(r,t);var e=Object(d.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"array-controller",children:[Object(n.jsx)("div",{className:"array-controller-options",children:Object(n.jsx)("button",{onClick:this.props.onReset,className:"btn btn-warning btn-sm m-2",id:"btn-reset",children:"RESET"})}),Object(n.jsx)("div",{className:"array-controller-options",children:Object(n.jsx)("button",{onClick:this.props.onSort,className:"btn btn-primary btn-sm m-2",id:"btn-sort1",children:"Sort!"})}),Object(n.jsx)("div",{className:"array-controller-options",children:Object(n.jsx)("button",{onClick:this.props.onBubbleSort,className:"btn btn-primary btn-sm m-2",id:"btn-sort2",children:"Bubble Sort"})}),Object(n.jsx)("div",{className:"array-controller-options",children:Object(n.jsx)("button",{onClick:this.props.onMergeSort,className:"btn btn-primary btn-sm m-2",id:"btn-sort3",children:"Merge Sort"})}),Object(n.jsx)("div",{className:"array-controller-options",children:Object(n.jsx)("button",{onClick:this.props.onTestCss,className:"btn btn-info btn-sm m-2",id:"btn-test1",children:"MistyRose"})}),Object(n.jsx)("div",{className:"array-controller-options",children:Object(n.jsx)("button",{onClick:this.props.onTestCss2,className:"btn btn-info btn-sm m-2",id:"btn-test2",children:"AliceBlue"})}),Object(n.jsx)("div",{className:"array-controller-options",children:Object(n.jsx)("button",{onClick:this.props.onTest,className:"btn btn-warning btn-sm m-2",id:"btn-test3",children:"Test MergeSort"})}),Object(n.jsxs)("div",{className:"array-controller-options",children:[Object(n.jsx)("label",{for:"array-length",className:"form-label",children:"Array Length"}),Object(n.jsx)("input",{type:"range",className:"form-range",id:"array-length-range"})]})]})}}]),r}(o.a.Component)),f=100,g=.01,p="AliceBlue",j="Orchid",v="LightSalmon",y=function(t){Object(m.a)(r,t);var e=Object(d.a)(r);function r(){var t;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={array:[],animations:[],solution:[]},t.componentDidMount=function(){t.resetArray()},t.resetArray=function(){var e=t.generateArray(),r=Object(c.a)(e).sort((function(t,e){return t-e}));t.setState({array:e,animations:[],solution:r}),t.drawInPlace()},t.generateArray=function(){for(var e=[],r=0;r<f;r++)e.push(t.randIntBetween(5,500));return e},t.randIntBetween=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},t.sortArray=function(){var e=t.state.array;console.log(e),e=e.sort((function(t,e){return t-e})),t.setState({array:e}),t.drawInPlace()},t.testCss=function(){t.changeColour("MistyRose")},t.testCss2=function(){t.changeColour(p)},t.merge=function(t,e){for(var r=0,n=0,a=t.length,o=e.length,s=[];r!==a&&n!==o;)t[r]>e[n]?(s.push(e[n]),n++):(s.push(t[r]),r++);return r!==a&&(s=s.concat(t.slice(r,void 0))),n!==o&&(s=s.concat(e.slice(n,void 0))),s},t.mergeSort=function(){var e=t.state.array,r=Object(c.a)(e);t.mergeSortInPlace(r,0,r.length),t.animate()},t.mergeSort_=function(e){var r=e.length;if(r<=1)return e;var n=Math.floor(r/2),a=e.slice(void 0,n),o=e.slice(n,void 0),s=t.mergeSort_(a),i=t.mergeSort_(o);return t.merge(s,i)},t.mergeInPlace=function(e,r,n,a){for(var o=r,s=n+1;o<=n&&s<=a;)if(1===t.doCompare(e,o,s,!0)){for(var i=s;i>o;)t.doSwap(e,i,i-1,!0),i--;n++,o++,s++}else o++;return e},t.mergeSortInPlace=function(e,r,n){if(n-r<=1)return e;var a=Math.floor((r+n)/2);return t.mergeSortInPlace(e,r,a),t.mergeSortInPlace(e,a,n),t.mergeInPlace(e,r,a-1,n-1)},t.quickSort=function(){},t.bubbleSort_=function(e){for(var r=!0,n=0;r&&n<f;){n++,r=!1;for(var a=0;a<e.length-1;a++){var o=a+1;1===t.doCompare(e,a,o,!0)&&(t.doSwap(e,a,o,!0),r=!0)}}return t.testSorted(e),e},t.bubbleSort=function(){t.bubbleSort_(Object(c.a)(t.state.array));t.animate()},t.doCompare=function(e,r,n,a){a&&t.addCompare(r,n);var o=e[r]-e[n];return o<0?-1:o>0?1:0},t.doSwap=function(e,r,n,a){a&&t.addSwap(r,n);var o=e[r];return e[r]=e[n],e[n]=o,e},t.testSorted=function(t){var e=Object(c.a)(t);e.sort((function(t,e){return t-e}));for(var r=0;r<t.length;r++)if(t[r]!==e[r])return console.log(t[r]," != ",e[r],"at",r),!1;return!0},t.equalArray=function(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0},t.debugSort=function(e,r){for(var n=0;n<500;n++){var a=t.generateArray(),o=Object(c.a)(a),s=a.sort((function(t,e){return t-e})),i=e.apply(void 0,[o].concat(Object(c.a)(r)));if(!t.equalArray(s,i))return!1;console.log("sort successful")}return!0},t.animate=function(){var e=t.state.animations;e.reverse(),t.setState({animations:e}),t.animate_()},t.animate_=function(){var e=t.state,r=(e.array,e.animations);t.drawInPlace(),0!==r.length&&(r.pop().animate(Object(b.a)(t)),setTimeout((function(){t.animate_()}),g))},t.animatePointAt=function(){},t.animateSwap=function(e,r){var n=t.getColour(e),a=t.getColour(r);t.changeColour(j,[e,r]),t.doSwap(t.state.array,e,r),t.setState(t.state),setTimeout((function(){t.changeColour(n,[e]),t.changeColour(a,[r])}),g)},t.animateCompare=function(e,r){var n=t.getColour(e),a=t.getColour(r);t.changeColour(v,[e,r]),setTimeout((function(){t.changeColour(n,[e]),t.changeColour(a,[r])}),g)},t.addPointAt=function(e){t.state.animations.push({pointAt:[e]})},t.addSwap=function(e,r){t.state.animations.push({swap:[e,r],animate:function(t){t.animateSwap(e,r)}})},t.addCompare=function(e,r){t.state.animations.push({compare:[e,r],animate:function(t){t.animateCompare(e,r)}})},t.sleep=function(t){var e=100*t,r=new Date,n=null;do{n=new Date}while(n-r<e)},t.resetAnimation=function(){},t.changeColour=function(t,e){var r=document.getElementsByClassName("array-bar");if(void 0===e)for(var n=0;n<r.length;n++)r[n].style.backgroundColor=t;else for(n=0;n<e.length;n++)r[e[n]].style.backgroundColor=t},t.getColour=function(t){return document.getElementsByClassName("array-bar")[t].style.backgroundColor},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{onReset:this.resetArray,onSort:this.sortArray,onBubbleSort:this.bubbleSort,onMergeSort:this.mergeSort,onTestCss:this.testCss,onTestCss2:this.testCss2,onTest:function(){return console.log(t.debugSort(t.mergeSortInPlace,[0,f]))}}),Object(n.jsxs)("div",{className:"array-container",children:[Object(n.jsx)("div",{className:"array-container-pillar",style:{height:"".concat(500,"px")}},"pillar"),this.state.array.map((function(t,e){return Object(n.jsx)("div",{className:"array-bar",style:{height:"".concat(t,"px")}},e)}))]})]})}},{key:"drawInPlace",value:function(){for(var t=this.state,e=t.array,r=t.solution,n=0;n<e.length;n++)e[n]===r[n]?this.changeColour("SpringGreen",[n]):this.changeColour(p,[n])}}]),r}(o.a.Component);var C=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(y,{className:"AlgoVis"})})};r(16);i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1036775b.chunk.js.map