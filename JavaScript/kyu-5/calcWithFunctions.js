/* 
    This time we want to write calculations using functions and get the results. 
    Let's have a look at some examples:
        seven(times(five())); // must return 35
        four(plus(nine())); // must return 13
        eight(minus(three())); // must return 5
        six(dividedBy(two())); // must return 3

    Requirements:
    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
*/

/* HELPER FUNCTIONS*/
function evalOperation(str) {
    try {
        if (str.includes('/')) return Math.floor(eval(str));
        return eval(str);
    } catch (err) {
        console.log('err:', err);
    }
}

var numFunc = function(num) {
    return function() { return !arguments.length ? num : evalOperation(`${num}` + arguments[0]); }
};

var operatorFunc = function(operator) {
    return function() {
        if (arguments.length) return `${operator}${arguments[0]}`;
    }
};

/* NUMBERS */
const zero = numFunc(0);
const one = numFunc(1);
const two = numFunc(2);
const three = numFunc(3);
const four = numFunc(4);
const five = numFunc(5);
const six = numFunc(6);
const seven = numFunc(7);
const eight = numFunc(8);
const nine = numFunc(9);

/* OPERATORS */
const times = operatorFunc('*');
const plus = operatorFunc('+');
const minus = operatorFunc('-');
const dividedBy = operatorFunc('/');