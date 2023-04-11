function returnObject(value) {
    let storedObject = localStorage.getItem(value);
    return JSON.parse(storedObject);
}
let data = { name: "Rida", gender: "Female" };
localStorage.setItem("dataValue", JSON.stringify(data));
let retrievedObj = returnObject("dataValue");
console.log(retrievedObj);
