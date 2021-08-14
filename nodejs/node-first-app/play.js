// const name = 'Max';
// let age = 29;
// const hasHobbies = true;

// const summarizeUser = (userName, userAge, userHasHobbies) => {
// 	return (
// 		'Name is ' +
// 		userName +
// 		', age is ' +
// 		userAge +
// 		' and the user has hobbies: ' +
// 		userHasHobbies
// 	);
// }
// console.log(summarizeUser(name, age, hasHobbies));

// objects
    // const person = {
    //     name: 'Lee',
    //     age: 26,
    //     greet() {
    //         console.log('Hi I am ' + this.name); 
    //     }
    // };

// person.greet();

//arrays
    // const hobbies = ['Sports', 'Cooking'];

    // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
    // console.log(hobbies);

// spread opperator
    // const hobbies = ['Sports', 'Cooking'];
    // const copiedArray = [...hobbies];

    // console.log(copiedArray);

// rest operator
    // const toArray = (...args) => {
    //     return args;
    // }

    // console.log(toArray(1, 2, 3, 4));

// destructuring
    // const printName = ({ name, age }) => {
    //     console.log(name, age);
    // }

    // printName(person);

// async code
    setTimeout(() => {
        console.log('This is Async code!');
    }, 10_000);

    console.log('This is');
    console.log('Synchronous code');