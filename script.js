const names = ["John", "Alice", "Bob", "Jane"];

// Loop over the array
for (let i = 0; i < names.length; i++) {
    // Check if the name starts with 'J' or 'j'
    if (names[i][0].toUpperCase() === 'J') {
        console.log(`Goodbye J${names[i].slice(1)}`);
    } else {
        console.log(`Hello ${names[i]}`);
    }
}
