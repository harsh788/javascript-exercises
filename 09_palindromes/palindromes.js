const palindromes = function (str) {
    strlower  = str.toLowerCase();
    let string = '';
    let stringrev = '';
    for(let i=0;i<strlower.length;i++)
    {
        if(strlower[i] == '.' || strlower[i] == ',' || strlower[i] == '!' || strlower[i] == ' ')
        {
            continue;
        }
        else
        {
            string = string + strlower[i];
        }
    }
    for(let i=0;i<string.length;i++)
    {
        stringrev = stringrev + string[string.length - i - 1];
    }
    if(string == stringrev) 
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
