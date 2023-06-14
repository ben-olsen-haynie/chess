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
        rank: 7,
        file: 'c',
        unitType:"pawn"
    },
    {
        rank: 7,
        file: 'd',
        unitType:"pawn"
    },
    {
        rank: 7,
        file: 'e',
        unitType:"pawn"
    },
    {
        rank: 7,
        file: 'f',
        unitType:"pawn"
    },
    {
        rank: 7,
        file: 'g',
        unitType:"pawn"
    },
    {
        rank: 7,
        file: 'h',
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

document.addEventListener(
    "click",
    (event) => {
        // console.log(event)
        // console.log(event.srcElement)

        // Challenge: if this click was on a piece, then console.log "this is a piece!"
        // WE SHALL RETURN!!!!! (mcArthur ref bee tee dubbs)
    }
);