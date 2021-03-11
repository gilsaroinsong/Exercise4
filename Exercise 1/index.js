//Saroinsong, Gillian
//Exercise 1

// Array
let people  = ["Greg", "Mary", "Devon", "James"];


// 1. 
for (let i=0; i<people.length; i++){
    console.log(people[i]);
}

// 2. 
people.forEach(function(item){
    console.log(item);
})

// 3. 
people.shift();


// 4. 
people.pop();


// 5. 
people.unshift("Matt");


// 6.
people.push("Gillian");
console.log(people);

// 7. 
for (let i=0; i<people.length; i++){
    if(i>1){
        break;
    }
    console.log(people[i]);
}

// 8. 
let ArrayBaru = people.slice(2,4);
console.log(ArrayBaru);

// 9.
    
people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

// 10. 
let withBob = people.concat("Bob");
console.log(withBob);


// Object 
let programming = {
    languages : ["JavaScript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
}

// 1. 
programming.languages.push("Go");
console.log(programming.languages);
// 2. 
programming["difficulty"] = 7;
console.log(programming.difficulty);
// 3.
console.log(programming);
delete programming.jokes;
console.log(programming);
// 4. 
programming.isFun = true;
console.log(programming);
// 5. 
let languages = programming.languages.map(function(item, index){
    return index + " - " + item;
})
console.log(languages);