 const printFormattedArguments = (arg1, arg2) => {
            // Using template literals for easy string interpolation.
            // console.log() is used as requested.
            // No 'var' keyword is used. 'const' is used for the function declaration.
            console.log(`${arg1} is ${arg2}`);
        };

        // --- Example Usage ---

        // Example 1: Printing strings
        // Calling the function with "Apple" and "Fruit" as arguments.
        printFormattedArguments("Apple", "Fruit"); // Expected output: "Apple is Fruit"

        // Example 2: Printing numbers
        // Calling the function with "10" and "Number" as arguments.
        printFormattedArguments(10, "Number"); // Expected output: "10 is Number"

        // Example 3: Printing a mix of types
        // Calling the function with a boolean and a string.
        printFormattedArguments(true, "Boolean Value"); // Expected output: "true is Boolean Value"

        // Example 4: Using 'let' for arguments before passing them (demonstrates no 'var')
        let city = "Addis Ababa";
        let country = "Ethiopia";
        printFormattedArguments(city, country);
