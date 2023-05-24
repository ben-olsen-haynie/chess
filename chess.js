// first things first, create the chess pieces

const pieces = [
    {
        rank: 7,
        file: 'a'
    },
    {
        rank: 7,
        file: 'b'
    }
];

for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i]
    const selector = `.r${piece.rank}>.c${piece.file}`;
    const position = document.querySelector(selector);
    position.classList.add('pawn');
}




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