const value = [];
const display = document.getElementById('display');
var before = [];
var after = [];
var string;
var display2 = [];

const addToDisplay = (val) => {
   
   
    value.push(val);
    const data = value.join('') 
    
    if(display2){
    display.value = display2 + data
    }
    else{
        display.value = data;
    }

    
}



const clearDisplay = () => {
    value.length = 0;
    display.value = value;
    before.length = 0
    after.length = 0
    display2 =null;
    string = null;
    console.log(display2)
}

const add = (val) => {
    before = value.join('');
    console.log(before)
    value.push(val)
    display2 = value.join('')
    display.value= display2
    value.length = 0;
    console.log(value)
    string = "added";
}
const multiply = (val) => {
    before = value.join('');
    console.log(before)
    value.push(val)
    display2 = value.join('')
    display.value= display2
    value.length = 0;
    console.log(value)
    string = "multiply";
}
const divide = (val) => {
    before = value.join('');
    console.log(before)
    value.push(val)
    display2 = value.join('')
    display.value= display2
    value.length = 0;
    console.log(value)
    string = "divide";
}
const subtract = (val) => {
    before = value.join('');
    console.log(before)
    value.push(val)
    display2 = value.join('')
    display.value= display2
    value.length = 0;
    console.log(value)
    string = "subtract";
}

const addCalculate = () => {
    console.log("started")
    display2.length = 0
    after = value.join('')
    value.length = 0;
    let first = before
    console.log(first)
    let first1 = parseFloat(first)
    console.log(first1)
    let second = after
    let second2 = parseFloat(second)
    console.log(second2)
    let add = first1 + second2;
    display.value = add;
}

const calculateMultiply = () => {
    console.log("started")
    display2.length = 0
    after = value.join('')
    value.length = 0;
    let first = before
    let first1 = parseFloat(first)
    console.log(first1)
    let second = after
    let second2 = parseFloat(second)
    console.log(second2)
    let add = first1 * second2;
    display.value = add;
}

const calculateDivide = () => {
    console.log("started")
    display2.length = 0
    after = value.join('')
    value.length = 0;
    let first = before
    let first1 = parseFloat(first)
    console.log(first1)
    let second = after
    let second2 = parseFloat(second)
    console.log(second2)
    let add = first1 / second2;
    display.value = add;
}

const calculateSubtract = () => {
    console.log("started")
    display2.length = 0
    after = value.join('')
    value.length = 0;
    let first = before
    let first1 = parseFloat(first)
    console.log(first1)
    let second = after
    let second2 = parseFloat(second)
    console.log(second2)
    let add = first1 - second2;
    display.value = add;
}
const calculate = () => {
    
    console.log(string)
    if(string === 'added'){
        console.log("if run")
        addCalculate();
    }
    if(string === 'multiply'){
        calculateMultiply();
    }
    if(string === 'divide'){
        calculateDivide();
    }
    if(string === 'subtract'){
        calculateSubtract();
    }
}