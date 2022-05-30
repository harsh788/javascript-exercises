const reverseString = function(str) {
    let ans = '';
    for(let i=0;i<str.length;i++)
    {
        let ch = str[str.length - i - 1];
        ans = ans + ch;
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
