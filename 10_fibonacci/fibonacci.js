const fibonacci = function(pos) {
    let a = 1, b = 1;
    if(pos <= 0)
    {
        return 'OOPS';
    }
    if(pos == 1)
    {
        return a;
    }
    else if(pos == 2)
    {
        return b;
    }
    else
    {
        let ans;
        for(let i=2;i<pos;i++)
        {
            ans = a + b;
            a = b;
            b = ans;
        }
        return ans;
    }
};

// Do not edit below this line
module.exports = fibonacci;
