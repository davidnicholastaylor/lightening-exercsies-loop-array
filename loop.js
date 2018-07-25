// Did not complete exercise. Tried to filter through a forEach loop. Consistently received syntax errors

let loopArray = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark" }, "JS", "rockstar"]

// Janet
const stringArray = [];
loopArray.forEach(item => {
    if (typeof item === "string") {
        stringArray.push(item);
    }
    return stringArray;
})
console.log(stringArray)
document.getElementById("rockstar").innerHTML = `${stringArray.join(" ")}`

//Jonathan
// const strings = array.filter(item => {
//     const isString = (typeof item === 'string')
//     return isString;
// })

//Meg
// const strings = array.filter(item => {
//     return typeof item === 'string';
// })

// console.log(strings)



// console.log(strings)