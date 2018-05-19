var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");

var questionColor = pickRandomColor();

var colorDisplay = document.getElementById("rgbColor");
colorDisplay.textContent = questionColor;

var title = document.querySelector(".title");

var gameMessage = document.querySelector(".gameMessage");

var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

//adding functionality to functions.
modeButtons.forEach(element => {
    element.addEventListener("click" ,()=>{
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        element.classList.add("selected");
        element.textContent === "EASY" ? numSquares = 3: numSquares = 6;
        reset();
    });
});


//reset function
function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    questionColor = pickRandomColor();
    resetButton.textContent = "NEW COLORS";
    colorDisplay.textContent = questionColor;
    gameMessage.textContent = "";
    //change colors of squares.
    for(var i = 0; i< squares.length; i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
        }else{
            squares[i].style.display = 'none';
        }
    }
    //reset background color.
    title.style.backgroundColor = "salmon";
}

//reset button to refresh the image colors.
resetButton.addEventListener("click", () => {
    //generate all new colors
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    questionColor = pickRandomColor();
    resetButton.textContent = "NEW COLORS";
    colorDisplay.textContent = questionColor;
    gameMessage.textContent = "";
    //change colors of squares.
    squares.forEach((element, index) => {
        element.style.backgroundColor = colors[index];
        squares[index].style.display = 'block';
    });
    //reset background color.
    title.style.backgroundColor = "salmon";
});


//to add the initial colors to the images.
squares.forEach((element, index) => {
    //add initial colors
    element.style.backgroundColor = colors[index];
    //add eventlisteners
    element.addEventListener("click", () => {
        if (element.style.backgroundColor === questionColor) {
            changeColor(questionColor);
            title.style.backgroundColor = questionColor;
            gameMessage.textContent = "WELL DONE!";
            resetButton.textContent = "PLAY AGAIN?";
        } else {
            element.style.backgroundColor = "#232323";
            gameMessage.textContent = "TRY AGAIN!";
        }
    });
});


//change color of all squares.
function changeColor(color) {
    squares.forEach(element => {
        element.style.backgroundColor = color;
    });
}


//pick a random color as the guest question.
function pickRandomColor() {
    var rando = Math.floor(Math.random() * colors.length);
    return colors[rando];
}


//generate an array of random colors with num values.
function generateRandomColors(num) {
    // make an array
    var arr = [];
    //return num times.
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return the array.
    return arr;
}


//pick random colors.
function randomColor() {
    //pick a red from 0 - 255
    var redPortion = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var greenPortion = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var bluePortion = Math.floor(Math.random() * 256);

    //return the complete rgb structure.
    return "rgb(" + redPortion + ", " + greenPortion + ", " + bluePortion + ")";
}