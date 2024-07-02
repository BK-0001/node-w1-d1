// accepting the args from terminal
console.log(process.argv[2]);

// creating prompt
process.stdout.write("How are you?");

// receiving user input from terminal
process.stdin.on("data", (data) => {
  console.log(data.toString());

  process.exit();
});
