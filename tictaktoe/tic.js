let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

// let chance = "X";
// change_chance= function (){
//     if (chance == "X"){
//         chance = "O";
// } else {
//     chance = "X";
// }

// };
// btn1.onclick = function(){
//     btn1.innerText =  chance;
//     change_chance();
// };

// btn2.onclick = function(){
//     btn2.innerText =  chance;
//     change_chance();
// };

// btn3.onclick= function(){
//     btn3.innerText =  chance;
//     change_chance();
// };

// btn4.onclick = function(){
//     btn4.innerText =  chance;
//     change_chance();
// };

// btn5.onclick = function(){
//     btn5.innerText =  chance;
//     change_chance();
// };

// btn6.onclick = function(){
//     btn6.innerText =  chance;
//     change_chance();
// };

// btn7.onclick = function(){
//     btn7.innerText =  chance;
//     change_chance();
// };

// btn8.onclick = function(){
//     btn8.innerText =  chance;
//     change_chance();
// };

// btn9.onclick = function(){
//     btn9.innerText =  chance;
//     cha




// let chance = "X";

// function change_chance() {
//     chance = (chance === "X") ? "O" : "X";
// }

// function handleClick(button) {
//     if (button.innerText === "") { // Check if the button is empty
//         button.innerText = chance;
//         checkWin();
//         change_chance();
//     }
// }

// btn1.onclick = function() { handleClick(btn1); };
// btn2.onclick = function() { handleClick(btn2); };
// btn3.onclick = function() { handleClick(btn3); };
// btn4.onclick = function() { handleClick(btn4); };
// btn5.onclick = function() { handleClick(btn5); };
// btn6.onclick = function() { handleClick(btn6); };
// btn7.onclick = function() { handleClick(btn7); };
// btn8.onclick = function() { handleClick(btn8); };
// btn9.onclick = function() { handleClick(btn9); };



// function checkWin(){
//     if (btn1.innerText == btn2.innerText && 
//         btn2.innerText == btn3.innerText && 
//         btn1.innerText != "") {
// alert(chance+ " wins");
//     }
// }

//  *************************************************************************** vbvbn*********************************************
let chance = "X";

function change_chance() {
    chance = (chance === "X") ? "O" : "X";
}

function handleClick(button) {
    if (button.innerText === "") { // Check if the button is empty
        button.innerText = chance;
        if (checkWin()) {
            alert(chance + " wins");
            resetGame(); // Reset the game after a win
        } else if (checkDraw()) {
            alert("It's a draw!");
            resetGame(); // Reset the game after a draw
        } else {
            change_chance();
        }
    }
}

btn1.onclick = function() { handleClick(btn1); };
btn2.onclick = function() { handleClick(btn2); };
btn3.onclick = function() { handleClick(btn3); };
btn4.onclick = function() { handleClick(btn4); };
btn5.onclick = function() { handleClick(btn5); };
btn6.onclick = function() { handleClick(btn6); };
btn7.onclick = function() { handleClick(btn7); };
btn8.onclick = function() { handleClick(btn8); };
btn9.onclick = function() { handleClick(btn9); };

function checkWin() {
    const winConditions = [
        [btn1, btn2, btn3], // Row 1
        [btn4, btn5, btn6], // Row 2
        [btn7, btn8, btn9], // Row 3
        [btn1, btn4, btn7], // Column 1
        [btn2, btn5, btn8], // Column 2
        [btn3, btn6, btn9], // Column 3
        [btn1, btn5, btn9], // Diagonal 1
        [btn3, btn5, btn7]  // Diagonal 2
    ];

    for (let condition of winConditions) {
        if (condition[0].innerText === condition[1].innerText && 
            condition[1].innerText === condition[2].innerText && 
            condition[0].innerText !== "") {
            return true; // A win condition is met
        }
    }
    return false; // No win condition met
}

function checkDraw() {
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById('btn' + i).innerText === "") {
            return false; // There is still an empty button
        }
    }
    return true; // All buttons are filled
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById('btn' + i).innerText = ""; // Clear all buttons
    }
    chance = "X"; // Reset chance to "X"
}