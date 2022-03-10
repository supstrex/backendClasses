function lowerCases(str) {
  if (typeof str === "string") {
    //first lets verify
    for (const letter of str.replace(/\s/g, "")) {
      //removing all whitespace characters
      if (letter === letter.toLowerCase()) {
        console.log(letter);
      }
    }
  } else {
    console.log("Please enter a string");
  }
}

lowerCases("This text Has Upper Cases"); //example
