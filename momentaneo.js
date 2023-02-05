const express = require('express');
const credentials = require( "./key/credentials");
const jwt = require('jsonwebtoken');
const pg = require('pg');


// Configuraion para conexion 
const pool = new pg.Pool(credentials.DATABASE);
  
const app = express();


// Middleware para autenticación de JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, 'your-secret-key', (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Endpoint para iniciar sesión
app.post('/login', (req, res) => {
  // Aquí deberías validar las credenciales de usuario y generar un token JWT
  // ...

  const token = jwt.sign({ userId: 1 }, 'your-secret-key');
  res.json({ token });
});

// Endpoint protegido por autenticación JWT
app.get('/protected', authenticateJWT, (req, res) => {
  pool.query('SELECT * FROM users WHERE id = $1', [req.user.userId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(result.rows[0]);
  });
});

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});
