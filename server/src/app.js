const express = require('express');
const moviesRouter = require('./routes/movies');

const app = express();

app.use('/movies', moviesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${3001}`);
});

module.exports = app; // for testing
