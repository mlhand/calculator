let operator1 = null;
let string1 = '';
let string2 = '';

//functions for:
//add
//subtract
//multiply
//divide
function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

//function operate that takes an operator and 2 numbers and calls 
//one of above functions
function operate(operator,a,b) {
    if (operator == 'add') {
        return add(a,b);}
    else if (operator == 'subtract') {
        return subtract(a,b);}
    else if (operator == 'multiply') {
        return multiply(a,b);}
    else if (operator == 'divide') {
        return divide(a,b);}
}
//basic html calculator with buttons for digits, functions, and equals key
//display
function generateCalculator() {
    const container = document.querySelector('#container');
    let row0 = document.createElement('div');
    let row1 = document.createElement('div');
    let row2 = document.createElement('div');
    let row3 = document.createElement('div');
    let row4 = document.createElement('div');

    row1.className = 'row1';
    row2.className = 'row2';
    row3.className = 'row3';
    row4.className = 'row4';
    let celldot = document.createElement('button');
    let cell1 = document.createElement('button');
    let cell2 = document.createElement('button');
    let cell3 = document.createElement('button');
    let cell4 = document.createElement('button');
    let cell5 = document.createElement('button');
    let cell6 = document.createElement('button');
    let cell7 = document.createElement('button');
    let cell8 = document.createElement('button');
    let cell9 = document.createElement('button');
    let cell0 = document.createElement('button');
    let cellplus = document.createElement('button');
    let cellminus = document.createElement('button');
    let cellx = document.createElement('button');
    let celldivide = document.createElement('button');
    let cellclear = document.createElement('button');
    let cellequal = document.createElement('button');

    celldot.classList.add('cell','celldot','num');
    cell1.classList.add('cell','cell1','num');
    cell2.classList.add('cell','cell2','num');
    cell3.classList.add('cell','cell3','num');
    cell4.classList.add('cell','cell4','num');
    cell5.classList.add('cell','cell5','num');
    cell6.classList.add('cell','cell6','num');
    cell7.classList.add('cell','cell7','num');
    cell8.classList.add('cell','cell8','num');
    cell9.classList.add('cell','cell9','num');
    cell0.classList.add('cell','cell0','num');
    cellplus.classList.add('cell','cellplus','operator');
    cellminus.classList.add('cell','cellminus','operator');
    cellx.classList.add('cell','cellx','operator');
    celldivide.classList.add('cell','celldivide','operator');
    cellclear.classList.add('cell','cellclear');
    cellequal.classList.add('cell','equal');

    celldot.textContent = '.';
    cell1.textContent = '1';
    cell2.textContent = '2';
    cell3.textContent = '3';
    cell4.textContent = '4';
    cell5.textContent = '5';
    cell6.textContent = '6';
    cell7.textContent = '7';
    cell8.textContent = '8';
    cell9.textContent = '9';
    cell0.textContent = '0';
    cellplus.textContent = '+';
    cellminus.textContent = '-';
    cellx.textContent = 'x';
    celldivide.textContent = '/';
    cellequal.textContent = '='
    cellclear.textContent = 'clear';

    cellplus.id = 'plus';
    cellminus.id = 'minus';
    cellx.id = 'multiply';
    celldivide.id = 'divide';
    cellequal.id = 'equal'

let display = document.createElement('div');
display.classList.add('cell');
display.id = 'display';
display.innerHTML = '80192830481923';

    row0.appendChild(display);
    row1.appendChild(cell7);
    row1.appendChild(cell8);
    row1.appendChild(cell9);
    row1.appendChild(cellplus);
    row2.appendChild(cell4);
    row2.appendChild(cell5);
    row2.appendChild(cell6);
    row2.appendChild(cellminus);
    row3.appendChild(cell1);
    row3.appendChild(cell2);
    row3.appendChild(cell3);
    row3.appendChild(cellx);
    row4.appendChild(cell0);
    row4.appendChild(celldivide);
    row4.appendChild(celldot);
    row4.appendChild(cellequal);
    row4.appendChild(celldivide);

    row4.appendChild(cellclear);

    container.appendChild(row0);
    container.appendChild(row1);
    container.appendChild(row2);
    container.appendChild(row3);
    container.appendChild(row4);

}

function clickButtons() {
    let a = 0;
    //let string1 = '';
    //let string2 = '';
    for (let i=0;i < buttons.length;i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].classList.contains('operator')) {
                //set operator variable as + - / or x 
                //save string1 and begin string2
                if (string2 !== '') {
                    let abcd = buttons[i].innerHTML;
                    // //console.log(abcd);
                    let operator1 = setOperator(abcd);
                    console.log(operator1);
                    num1 = Number(string1);
                    num2 = Number(string2);
    
                    let answer = operate(operator1,num1,num2);
                    string1 = answer;
                    string2 = '';
                    operator1 = ''
                    console.log(answer)
                    document.getElementById('display').innerHTML = answer;
                }
                else {
                let abcd = buttons[i].innerHTML;
                //console.log(abcd);
                operator1 = setOperator(abcd);
                console.log(operator1);
                //updateDisplay();
                }
            }
            else if (buttons[i].classList.contains('num')) {
                //add num to string 1 or 2
                a = buttons[i].innerHTML;
                setNums(a);
                updateDisplay(string1,string2);
            }
            else if (buttons[i].classList.contains('celldot')) {
                //add dot to string
                //if dot already pressed return error
            }
            else if (buttons[i].classList.contains('equal')) {
                //run operate function with operator, string1, string 2 (convert str2num first)
                num1 = Number(string1);
                num2 = Number(string2);

                let answer = operate(operator1,num1,num2);
                string1 = answer;
                string2 = '';
                console.log(answer)
                document.getElementById('display').innerHTML = answer;
                //updateDisplay();
            }
            else if (buttons[i].classList.contains('cellclear')) {
                //run clear function
                operator1 = null;
                //num1 === null;
                //num2 === null;
                clearDisplay();
            }
        })


    }


}


function setOperator(b) {
    if (b == '+') {
        return 'add'
    }
    else if (b == '-') {
        return 'subtract';
    }
    else if (b == 'x') {
        return 'multiply';
    }
    else if (b == '/') {
        return 'divide'
    }
}

function setNums(a) {
    if (operator1 === null) {
    string1 += a;
    }
    else 
    { string2 += a;}

}

function updateDisplay(string1,string2) {
    //if operator is null display only first string
    //if operator not null display first plus operator plus second
    if (operator1 === null) {
        document.getElementById('display').innerHTML = string1;
    }
    else {document.getElementById('display').innerHTML = string2;
}
//display.textContent = string1;


}

function clearDisplay() {

//display = document.querySelector('div').classList.contains('display'); 
document.getElementById('display').innerHTML = '';
operator1 === null;
//display.innerHTML = 'ewrijfoewjrg';
string1 = '';
string2 = '';

}


//clear button
generateCalculator();
let buttons = document.querySelectorAll('button');

//functions to populate display when you click a number
clickButtons();
