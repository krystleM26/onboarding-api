const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.json());

// Sample API route
app.get('/', (req, res) => {
    res.send('Hello, this is your API!');
  });
  
  // Example of POST route for your onboarding system
  app.post('/onboard', (req, res) => {
    const userData = req.body;
    // Handle user onboarding logic here (e.g., save to database, send API requests, etc.)
    res.send(`User ${userData.name} has been onboarded!`);
  });
  
  app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
  });