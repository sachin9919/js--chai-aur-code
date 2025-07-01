const one = function(){
    usrName: "sam"
    console.log(this.userName)
}

// const sumFunction = (num1 , num2) => { // ******ab curly braces mein wrap kiya to return keyword likhna padega *******
//     return num1+num2
// }


// const sumFunction = (num1,num2) => num1+num2
//const sumFunction = (num1,num2) => (num1+num2)
const sumFunction = (num1,num2) => ({username: "sam"}) // *** you have to wrap it inside brackets otherwie it will not be returned

(function chai(){
    console.log(`DB connected`)
})() ; // agar yaha semiclo nahi lagaye to error de dega

(() => {
    console.log(`DB connected`)
})('hitesh')