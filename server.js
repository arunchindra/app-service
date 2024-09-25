const express = require('express');
const app = express();
const port = process.env.PORT || 8000; // Azure App Service uses the PORT environment variable
 
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
