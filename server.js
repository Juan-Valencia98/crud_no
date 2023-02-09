const express = require('express');
// create express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Setup server port
const port = process.env.PORT || 5000;
// define a root route
app.get('/', (req, res) => {
  res.send("¡Hola Mundo!");
});
// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});