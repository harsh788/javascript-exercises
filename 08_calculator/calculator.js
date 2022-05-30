const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(num) {
	let ans = 0;
	for(let i=0;i<num.length;i++)
	{
		ans = ans + num[i];
	}
	return ans;
};

const multiply = function(num) {
	let ans = 1;
	for(let i=0;i<num.length;i++)
	{
		ans = ans * num[i];
	}
	return ans;
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
	let ans = 1;
	for(let i=num;i>0;i--)
	{
		ans = ans * i;
	}
	return ans;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
