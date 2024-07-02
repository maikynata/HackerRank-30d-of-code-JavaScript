function processData(input) {
    //Enter your code here
    const lines = input.split('\n');
    const cases = parseInt(lines[0]);
    //console.log(cases);
    
    //const linesLength = parseInt(lines.length);
    
    // const name = lines[1].split(' ');
    // console.log(name[0]);
    // console.log(name[1]);
    
    const friendsMap = new Map()
    
    for (let i = 1; i <= cases; i++ ) {
        
        const friend = lines[i].split(' ');
        let name = friend[0];
        let phone = friend[1];
        friendsMap.set (name, phone); 
    }
    
    //console.log(friendsMap);
    
    for (let i = cases+1 ; i < lines.length; i++) {
        
        const query = lines[i];
        //console.log(query);
        if (friendsMap.has(query)){
            console.log( query +'='+ friendsMap.get(query));    
        } else {
            console.log ("Not found")
        }
    }
    // const friends = new Map()
    // friends.set('nome1', '9979797')
    // friends.set('nome2', '9979797')
    // friends.set('nome3', '9979797')
    
    // console.log(friends);
    
    
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
