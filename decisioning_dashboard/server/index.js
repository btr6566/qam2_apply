
const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001; //Port 3000 is used by the React App by default, hense why use 3001

const app = express();


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')))


//Simple Hello world for testing
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });


//Needs to be last?
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});