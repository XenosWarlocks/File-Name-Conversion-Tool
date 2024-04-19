# File-Name-Conversion-Tool
This Node.js script reads a text file containing names in "First Last" format, converts them into "firstname.lastname" format, adds a domain, and saves the converted names to a new text file.

# Usage:
1. Ensure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the directory containing the script.
4. Create a text file named `join.txt` containing names in the format "First Last", with each name on a new line.
5. Run the script using node `index.js`.
6. Check the generated file `converted_names.txt` for the converted names.

# Notes:
- Ensure the input file (`join.txt`) exists and is correctly formatted.
- The script assumes each name in `join.txt` is on a separate line.
- Adjust the domain (`@ba.com`) as needed for your use case.
- Error handling is included for file operations.
