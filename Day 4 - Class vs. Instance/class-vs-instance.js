
function Person(initialAge){
    // Add some more code to run some checks on initialAge
   
   class Person {
       constructor(age){
           this.age = age;
       }
   }
   
   let PersonAge;
   
    if (initialAge < 0) {
        console.log ("Age is not valid, setting age to 0.");
        PersonAge = new Person(0);
    } else {
        PersonAge = new Person(parseInt(initialAge));
    }   
    
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    const age = PersonAge.age;
    
    if (age < 13 ){
        console.log("You are young.")
    } else if (age >= 13 && age < 18){
        console.log("You are a teenager.")
    } else {
        console.log ("You are old.")
    }
    
  };
   this.yearPasses=function(){
        // Increment the age of the person in here
        PersonAge.age++;
   };
}
