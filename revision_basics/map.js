const arr = [1,3,2,4,5,6,7,8];
let nums = arr.map((val) => {
    return val+10;
});
console.log(nums);

const newnum = arr
        .map((val) => val*10)
        .map((val) => val+1)
        .filter((val) => val >= 40)

console.log(newnum);