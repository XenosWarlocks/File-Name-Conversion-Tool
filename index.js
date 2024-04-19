const fs = require('fs');

// Function to convert a name to "firstname.lastname" format
function convertNameToDotCase(name) {
  const [firstName, lastName] = name.toLowerCase().split(' ');
  return `${firstName}.${lastName}`;
}

// Read the content of the text file
fs.readFile('join.txt', 'utf8', (err, fileContent) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Split the content into an array of names
  const namesArray = fileContent.split('\n');

  // Convert each name in the array to "firstname.lastname" format
  const convertedNames = namesArray.map((name) => convertNameToDotCase(name.trim()));

  // Add "@company.com" to each converted name
  const convertedNamesWithDomain = convertedNames.map((name) => `${name}@example.com`);

  // Join the converted names with newline separator
  const convertedContent = convertedNamesWithDomain.join('\n');

  // Write the converted content back to the file
  fs.writeFile('converted_names.txt', convertedContent, 'utf8', (err) => {
    if (err) {
      console.error("Error writing the file:", err);
      return;
    }
    console.log("Names converted and saved to converted_names.txt");
  });
});
