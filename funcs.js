// investigate revealing module pattern?
// if objects have private properties in this scope, revealing modile pattern has
// to be used (along with getters/setters)

// using typescript will enforce data types for arguments as well 


// function StoreUserData(idName, idDate) {
//     // var x = document.getElementById(idName).value;
//     document.getElementById(idName).innerHTML = idDate;
// }

// function SetValueForElemID(getID, setID) {
//     document.getElementById(getID).innerHTML = document.getElementById(setID).value
// }

function DisplayDot(parentGraphID, graphPoint, axisBounds) {
    // parentGraphID is name of element that DisplayDot is placed inside

    // assign the axis length absolute values.
    // axis labels and ticks will be handled separately
    let x_axis = document.getElementById(parentGraphID).clientWidth; // currently not used, will use later
    let y_axis = document.getElementById(parentGraphID).clientHeight;
    
    // y axis is inverted, so (0,0) is the top left of the elem. y axis needs to be flipped
    // the (x,y) coordinates are changed based on the axis bounds
    let x = x_axis*(graphPoint.xVal)/axisBounds[0];
    let y = y_axis-y_axis*(graphPoint.yVal)/axisBounds[1]; // flip it. into shape. shape it up. get straight

    let displayPoint = document.createElement("div");
    displayPoint.style.left = x + "px";
    displayPoint.style.top = y + "px";
    displayPoint.className = graphPoint.classTitle;

    document.getElementById(parentGraphID).appendChild(displayPoint);
}

function DisplayPlot(parentGraphID, graphObject) {
    // create new dots with coordinates from arrays
    for (index in graphObject.pointsArr) {
        DisplayDot(parentGraphID, graphObject.pointsArr[index], graphObject.axisBounds);
    } 
}

/* 
    plotName will be used for display later
    plotType will be used for presentation. e.g. Scatter and Line will need the same data points but present differently
    pointsArr should be an array of GraphPoint objects
    When column graphs are eventually introduced, GraphPoints will not work as the array but instead will need to be single values
    Similar with stacked column graphs, which will be array of arrays to appear in the cols
*/ 

// make these private later and use getters/setters (better way to do it)
function Graph(pointsArr=[], axisBounds=[10,10], plotName="---", plotType="---", xAxisName="---", yAxisName="---", tickSpace=1) {
    this.pointsArr = pointsArr;
    this.axisBounds = axisBounds;
    this.plotName = plotName;
    this.plotType = plotType;
    this.xAxisName = xAxisName;
    this.yAxisName = yAxisName;
    this.tickSpace = tickSpace;
}

/* 
    to include: shape or type (circle, square, triangle, etc), shape fill, outline 
*/ 
function GraphPoint(xVal=0, yVal=0, classTitle="dot", pointName="---") {
    this.xVal = xVal;
    this.yVal = yVal;
    this.classTitle = classTitle;
    this.pointName = pointName;
}
