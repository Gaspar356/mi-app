const express = require('express');
const app = express();
const PORT = 4000;
const { sequelize } = require('./models');

// Middlewares
app.use(express.json());

// Routes
app.use('/users', require('./routes/user'));
app.use('/categories', require('./routes/category'));
app.use('/games', require('./routes/game'));
app.use('/purchases', require('./routes/purchase'));

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Conection to MySQL has been established successfully.');
    await sequelize.sync(); 
  } catch (err) {
    console.error('Error connecting to MySQL', err);
  }
});
