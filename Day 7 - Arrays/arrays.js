'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    let reversedArr = ''
    
    for (let i = arr.length -1; i >= 0; i-- ) {
        
        //const currentIndex = arr[i];
        
        reversedArr += arr[i];
        reversedArr += " "
    }
    
    console.log(reversedArr);
    
    //let reversedArrStr = ''
     
    //for (let i = 0 ; i <= reversedArr.length -1; i++ ) {
        //reversedArrStr += reversedArr[i];
        //reversedArrStr += " "
    //}
    
    //console.log(reversedArrStr);

}
