// console.log('destructuring');


// const person = {
//     name: "Drew",
//     age: 23,
//     location: {
//         city: "Waterloo",
//         temp: 17
//     }
// };

// const {name: firstName='Anonymous', age} = person;
// console.log(`${firstName} is ${age}`)



// const book = {
//     title: 'Ego is the Enemy',
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name: publisherName= "Self-Published"} = book.publisher;
// console.log(publisherName);


const address = [];

const[, , state= "New York"] = address;

console.log(`You are in ${state}.`)



const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee,,cost,] = item;
console.log(`A medium ${coffee} costs ${cost}`)