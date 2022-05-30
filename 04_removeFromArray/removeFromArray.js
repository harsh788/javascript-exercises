const removeFromArray = function() {
    let args = Array.from(arguments);
    arr = args[0];
    args.shift();
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<args.length;j++)
        {
            if(arr[i] === args[j])
            {
                arr.splice(i, 1);
                i--;
                break;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
