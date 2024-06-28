function processData(input) {
    //Enter your code here
    //const lines = input.trim().split('\n');
    let lines = input.trim().split('\n');
    let nTestCases  = parseInt(input.slice(0, input.indexOf("\n")));
    
    //console.log("N of test cases:", nTestCases);
    //console.log("N of lines", lines);
    
    for (let i = 1; i <= nTestCases ; i++ ) {
        const currentString = lines[i];
        let evenIndex = '';
        let oddIndex = '';
        //console.log(lines[i]);
        
        for (let j = 0; j < currentString.length; j++) {
            
            var indexTest = j % 2;
            if (indexTest === 0) {
                evenIndex += currentString[j];
            } else {
                oddIndex += currentString[j];
            }
        }
        
        console.log(evenIndex + ' ' + oddIndex);
    }
    
    //console.log ("testcase: ", testeCase2);
    
    //testeCase1 = testeCase1.join("");
    //testeCase2 = testeCase2.join("");
    
    //console.log(testeCase1);
    //console.log(testeCase2);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
