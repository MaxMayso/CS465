/*Author : Max Maysonet-Ramirez
Date : 05/09/2024

initialize connection to Travlr HTML files and node.js functions stored therein
via express framework, then run on port through unsecured http protocol
through port 3000. 

*/

const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the 'travlr' directory as said in directions.
app.use(express.static('travlr'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});