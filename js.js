const myobject = {
    id: 36,
    name: "ayman",
    job: "Night Guard",
    age: 22,
    food: "burger",
}
const jsonData = JSON.stringify(myobject);
const objFormat = JSON.parse(jsonData);

// console.log(objFormat.food);