//******READ IN MDN *********//


const nums = [1,2,3];
 const total = nums.reduce((acc, currval) => { // so here acc  first take intial value that is 0 than it will take returned value
    console.log(`acc:- ${acc} , currval :- ${currval}`);
    return currval+acc;
 } ,0);

 console.log(total);

 const obj = [
    {
        course: "web dev",
        price: 999,
    },
    {
        course: "app dev",
        price: 68413
    },
    {
        course: "ai/ml",
        price: 78878,
    }
 ];

 const totalPrice = obj.reduce((acc , item) => (acc+item.price) ,0)

 console.log(totalPrice);