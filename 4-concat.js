const printTwoArguments = (arg1, arg2) => {
    // Using template literals for clean string interpolation.
    // console.log() is used as requested.
    // No 'var' keyword is used. 'const' is used for the function declaration.
    console.log(`${arg1} is ${arg2}`);
};

// --- Example Usage ---

console.log("--- Test Cases ---");

// Test Case 1: Two string arguments
// Expected output: "Apple is Fruit"
printTwoArguments("Apple", "Fruit");

// Test Case 2: A number and a string argument
// Expected output: "10 is Number"
printTwoArguments(10, "Number");

// Test Case 3: A boolean and a string argument
// Expected output: "true is Boolean Value"
printTwoArguments(true, "Boolean Value");

// Test Case 4: Variables used as arguments (demonstrates no 'var')
let city = "Addis Ababa";
const country = "Ethiopia"; // Using const for the second variable
printTwoArguments(city, country); // Expected output: "Addis Ababa is Ethiopia"

// Test Case 5: Undefined values
// Expected output: "undefined is undefined"
printTwoArguments(undefined, undefined);

// Test Case 6: Null values
// Expected output: "null is null"
printTwoArguments(null, null);

// Test Case 7: Mixed types
// Expected output: "My Name is John"
printTwoArguments("My Name", "John");

console.log("--- End Test Cases ---");
