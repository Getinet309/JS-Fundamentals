const args = process.argv.slice(2);

if (args.length === 1) {
  console.log(`${args[0]} is cool`);
} else if (args.length >= 2) {
  console.log(`${args[0]} is ${args[1]}`);
} else {
  console.log('Usage: node script.js <arg1> [arg2]');
}
