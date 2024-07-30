// Restart Game Btn
var restart = document.querySelector("#restart")

// Grab all the squares
var squares = document.querySelectorAll("td")

// Clear all the squares
function clearBoard(){
    for(var i=0; i < squares.length; i++){
        squares[i].textContent = "";
        squares[i].style.backgroundColor = "white"
    }
}

restart.addEventListener("click", clearBoard)

// Check the square marker
function changeMarker(){
    if(this.textContent == ""){
        this.textContent= "X";
    }
    else if(this.textContent == "X"){
        this.textContent = "O";
    }
    else{
        this.textContent = "";
    }
}

// For loop to add event Listeners to all squares
for(var i=0; i < squares.length; i++){
    squares[i].addEventListener("click", changeMarker);
    squares[i].addEventListener("click", win);
}

// win
function win(){
    if(squares[0].innerHTML == "X" && squares[1].innerHTML == "X" && squares[2].innerHTML == "X" || squares[0].innerHTML == "O" && squares[1].innerHTML == "O" && squares[2].innerHTML == "O"){
        squares[0].style.backgroundColor = "#42b9f5", squares[1].style.backgroundColor = "#42b9f5", squares[2].style.backgroundColor = "#42b9f5";
    }
    else if(squares[3].innerHTML == "X" && squares[4].innerHTML == "X" && squares[5].innerHTML == "X" || squares[3].innerHTML == "O" && squares[4].innerHTML == "O" && squares[5].innerHTML == "O"){
        squares[3].style.backgroundColor = "#42b9f5", squares[4].style.backgroundColor = "#42b9f5", squares[5].style.backgroundColor = "#42b9f5";
    }
    else if(squares[6].innerHTML == "X" && squares[7].innerHTML == "X" && squares[8].innerHTML == "X" || squares[6].innerHTML == "O" && squares[7].innerHTML == "O" && squares[8].innerHTML == "O"){
        squares[6].style.backgroundColor = "#42b9f5", squares[7].style.backgroundColor = "#42b9f5", squares[8].style.backgroundColor = "#42b9f5";
    }
    else if(squares[0].innerHTML == "X" && squares[3].innerHTML == "X" && squares[6].innerHTML == "X" || squares[0].innerHTML == "O" && squares[3].innerHTML == "O" && squares[6].innerHTML == "O"){
        squares[0].style.backgroundColor = "#42b9f5", squares[3].style.backgroundColor = "#42b9f5", squares[6].style.backgroundColor = "#42b9f5";
    }
    else if(squares[1].innerHTML == "X" && squares[4].innerHTML == "X" && squares[7].innerHTML == "X" || squares[1].innerHTML == "O" && squares[4].innerHTML == "O" && squares[7].innerHTML == "O"){
        squares[1].style.backgroundColor = "#42b9f5", squares[4].style.backgroundColor = "#42b9f5", squares[7].style.backgroundColor = "#42b9f5";
    }
    else if(squares[2].innerHTML == "X" && squares[5].innerHTML == "X" && squares[8].innerHTML == "X" || squares[2].innerHTML == "O" && squares[5].innerHTML == "O" && squares[8].innerHTML == "O"){
        squares[2].style.backgroundColor = "#42b9f5", squares[5].style.backgroundColor = "#42b9f5", squares[8].style.backgroundColor = "#42b9f5";
    }
    else if(squares[0].innerHTML == "X" && squares[4].innerHTML == "X" && squares[8].innerHTML == "X" || squares[0].innerHTML == "O" && squares[4].innerHTML == "O" && squares[8].innerHTML == "O"){
        squares[0].style.backgroundColor = "#42b9f5", squares[4].style.backgroundColor = "#42b9f5", squares[8].style.backgroundColor = "#42b9f5";
    }
    else if(squares[2].innerHTML == "X" && squares[4].innerHTML == "X" && squares[6].innerHTML == "X" || squares[2].innerHTML == "O" && squares[4].innerHTML == "O" && squares[6].innerHTML == "O"){
        squares[2].style.backgroundColor = "#42b9f5", squares[4].style.backgroundColor = "#42b9f5", squares[6].style.backgroundColor = "#42b9f5";
    }
}

