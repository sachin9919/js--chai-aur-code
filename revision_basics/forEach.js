const a = ["hello" , "cptain" , "sam"];

a.forEach(function (val) {
    console.log(val);
});
 
a.forEach((val) => {
    console.log(val);
})

const arr  = [
    {
        name: "sachin",
        class: "12th"
    },
    {
        name: "ifmff",
        class : "adnv"
    },
]

arr.forEach((item) => {
    console.log(item.name);
})

const num = [1,2,3,4,5,6,7,8,9];

const ans = num.filter((val) => {
    return val>4;
});
console.log(ans);