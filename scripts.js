// Reset on Click 
const reset = document.querySelector('#reset'); 
reset.onclick = () => {
    bottomDisplay.textContent = ' '
    topDisplay.textContent = ' '
};

const functionalButtons = document.querySelectorAll('#singleButtons'); 

// Display 
const topDisplay = document.querySelector("#topDisplay"); 
const bottomDisplay = document.querySelector("#bottomDisplay"); 

// Numbers on click
const zero = document.querySelector('#zero'); 
const one = document.querySelector('#one'); 
const two = document.querySelector('#two'); 
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five'); 
const six = document.querySelector('#six'); 
const seven = document.querySelector('#seven'); 
const eight = document.querySelector('#eight'); 
const nine = document.querySelector('#nine'); 

// Displaying Clicks
zero.onclick = (num) => { bottomDisplay.textContent = bottomDisplay.textContent + 0 }
one.onclick = (num) => { bottomDisplay.textContent = bottomDisplay.textContent + 1 }
two.onclick = (num) => { bottomDisplay.textContent = bottomDisplay.textContent + 2 }
three.onclick = (num) => { bottomDisplay.textContent = bottomDisplay.textContent + 3 }
four.onclick = (num) => { bottomDisplay.textContent = bottomDisplay.textContent + 4 }
five.onclick = (num) => { bottomDisplay.textContent = bottomDisplay.textContent + 5 }
six.onclick = (num) => { bottomDisplay.textContent = bottomDisplay.textContent + 6 }
seven.onclick = (num) => { bottomDisplay.textContent = bottomDisplay.textContent + 7 }
eight.onclick = (num) => { bottomDisplay.textContent = bottomDisplay.textContent + 8 }
nine.onclick = (num) => { bottomDisplay.textContent = bottomDisplay.textContent + 9 }

// Mathematical Function Clicks
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus'); 
const times = document.querySelector('#times');
const divide = document.querySelector('#divide'); 
const equals = document.querySelector('#equals')

// Equals 
equals.onclick = () => {
    let string = topDisplay.textContent + ' ' + bottomDisplay.textContent;
    string = string.split(' ');
    if (string[1] == '+') {
        bottomDisplay.textContent = (+string[0] + +string[2])
    }
    else if (string[1] == '-') {
        bottomDisplay.textContent = (+string[0] - +string[2])
    }
    else if (string[1] == '*') {
        bottomDisplay.textContent = (+string[0] * +string[2])
    }
    else if (string[1] == '/') {
        bottomDisplay.textContent = (+string[0] / +string[2])
    }
    topDisplay.textContent = ''
}

// Addition
plus.onclick = () => {
    let string = topDisplay.textContent + ' ' + bottomDisplay.textContent; 
    string = string.split(' '); 
    if (string[1] == '+') {
        bottomDisplay.textContent = (+string[0] + +string[2])
    }
    else if (string[1] == '-') {
        bottomDisplay.textContent = (+string[0] - +string[2])
    }
    else if (string[1] == '*') {
        bottomDisplay.textContent = (+string[0] * +string[2])
    }
    else if (string[1] == '/') {
        bottomDisplay.textContent = (+string[0] / +string[2])
    }
    topDisplay.textContent = bottomDisplay.textContent + ' +'
    bottomDisplay.textContent = ''
}

// Subtraction
minus.onclick = () => {
    let string = topDisplay.textContent + ' ' + bottomDisplay.textContent;
    string = string.split(' ');
    if (string[1] == '+') {
        bottomDisplay.textContent = (+string[0] + +string[2])
    }
    else if (string[1] == '-') {
        bottomDisplay.textContent = (+string[0] - +string[2])
    }
    else if (string[1] == '*') {
        bottomDisplay.textContent = (+string[0] * +string[2])
    }
    else if (string[1] == '/') {
        bottomDisplay.textContent = (+string[0] / +string[2])
    }
    topDisplay.textContent = bottomDisplay.textContent + ' -'
    bottomDisplay.textContent = ''
}

// Multiplication
times.onclick = () => {
    let string = topDisplay.textContent + ' ' + bottomDisplay.textContent;
    string = string.split(' ');
    if (string[1] == '+') {
        bottomDisplay.textContent = (+string[0] + +string[2])
    }
    else if (string[1] == '-') {
        bottomDisplay.textContent = (+string[0] - +string[2])
    }
    else if (string[1] == '*') {
        bottomDisplay.textContent = (+string[0] * +string[2])
    }
    else if (string[1] == '/') {
        bottomDisplay.textContent = (+string[0] / +string[2])
    }
    topDisplay.textContent = bottomDisplay.textContent + ' *'
    bottomDisplay.textContent = ''
}

// Division 
divide.onclick = () => {
    let string = topDisplay.textContent + ' ' + bottomDisplay.textContent;
    string = string.split(' ');
    if (string[1] == '+') {
        bottomDisplay.textContent = (+string[0] + +string[2])
    }
    else if (string[1] == '-') {
        bottomDisplay.textContent = (+string[0] - +string[2])
    }
    else if (string[1] == '*') {
        bottomDisplay.textContent = (+string[0] * +string[2])
    }
    else if (string[1] == '/') {
        bottomDisplay.textContent = (+string[0] / +string[2])
    }
    topDisplay.textContent = bottomDisplay.textContent + ' /'
    bottomDisplay.textContent = ''
}


