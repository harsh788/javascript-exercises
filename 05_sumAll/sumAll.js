const sumAll = function(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b))
    {   
        if(a>=0 && b>=0)
        {
            let big, small, ans = 0;
            if(a >= b)
            {
                big = a;
                small = b;
            }
            else 
            {
                big = b;
                small = a;
            }

            for(let i=small;i<=big;i++)
            {
                ans = ans + i;
            }
            return ans;
        }
        else
        {
            return 'ERROR';
        }
    }
    else
    {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
