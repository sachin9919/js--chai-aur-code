const k = symbol("561");

const j = {
    email :"dana@gmklsd.com",
    id: 1246,
    "name": "lkdsl",
    [k]: "mykey1" // imp
}

console.log(j.name);// that is wrong
console.log(j["name"]); //that is correct