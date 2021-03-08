// 1. Mengubah fungsi menjadi fungsi arrow
const golden = goldenFunction = () =>{
    console.log("this is golden!!")
}

golden()

// 2. Sederhanakan menjadi Object literal di ES6
const newFunction = literal = (firstName, lastName) =>{
    return {
      firstName,
      lastName,
      fullName: () =>{
        console.log(firstName + " " + lastName)
      }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName() 

// 3. Destructuring
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation } = newObject;

console.log(firstName, lastName, destination, occupation)

// 4. Array Spreading
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

// 5. Template Literals
const planet = "earth"
const view = "glass"
let before = `Lorem ${view} dolor sit amet,  
    consectetur adipiscing elit, ${planet} do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim
     ad minim veniam`
 
// Driver Code
console.log(before) 

var array = ["123", "456", "#123", "23", "231", "267"];

console.log(array.filter(function(item){
    var finder = '2';
    return eval('/'+finder+'/').test(item);
}));

const daftarHobi = ['Olahraga', 'Makan', 'Ngoding']
let hobiFavorit
for (const hobi of daftarHobi) {
    hobiFavorit = hobi
}

console.log(hobiFavorit);

for (var i=1; i <= 20; i+=2) {
    console.log(i);
}