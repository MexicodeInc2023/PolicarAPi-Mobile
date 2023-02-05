const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
    // aceptamos peticiones de cualquier origen
    origin: "*",
};

app.use(cors(corsOptions));

//convertimos a tipo - application/json
app.use(express.json());

// convertimos a tipo - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// base de datos 
const db = require("./app/models");

db.sequelize.sync();

// Rutas
//Bienvenida
app.get("/", (req, res) => {
    res.send(`<body style="background: #2f363d; font-family: system-ui; color: white; text-align:center;"><h1>Esta vivo!!</h1> <br/> <h2> Bienvenido a la API de Policard_Mobile :D</h2></body>`);
  });

//auth 
require("./app/routes/auth.routes")(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`esta vivo!! http://localhost:${PORT}.`);
});

