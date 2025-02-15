'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}



function main() {
    const n: number = parseInt(readLine().trim(), 10);
    //console.log(n);
    const binaryString = n.toString(2);
    //console.log(binaryString);
    
    const groups = binaryString.split('0');
    
    let maxLenght = 0;
    for (const group of groups) {
        if (group.length > maxLenght) {
            maxLenght = group.length;
        }
    }
    console.log(maxLenght);
}
