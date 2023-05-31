// first things first, create the chess pieces

const pieces = [
    {
        rank: 7,
        file: 'a',
        unitType: "pawn"
    },
    {
        rank: 7,
        file: 'b',
        unitType:"pawn"
    },
    {
        rank: 8,
        file: 'e',
        unitType:"king"
    }
];

for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i]
    const selector = `.r${piece.rank}>.c${piece.file}`;
    const position = document.querySelector(selector);
    position.classList.add(piece.unitType);
}
// I tried to add a king class to add its picture but by adding it, it
// took away the pawns too?
const king = [
    {
    rank: 8,
    file: 'e'
    }
];


// const person = {
//     name: 'dean',
//     age: 26,
//     sayHello: function() {
//         console.log(`Hi, my name is ${this.name}`);
//         console.log(`... and I am ${this.age} years old.`);
//     }
// }

// console.log(person.sayHello())


// function someFunction() {
//     // do something
// }