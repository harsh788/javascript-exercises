const findTheOldest = function(people) {
    let max = 0;
    let ans = '';
    for(let i=0;i<people.length;i++)
    {
        let age;
        if(people[i].yearOfDeath == null)
        {
            age = new Date().getFullYear() - people[i].yearOfBirth;
        }
        else
        {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }

        if(age>max)
        {
            max = age;
            ans = people[i]
        }
    }
    return ans;
};  

// Do not edit below this line
module.exports = findTheOldest;
