require('dotenv').config()
const express = require('express');
const cors = require('cors');
const dbConnect = require('./src/config/mongo')
const routers = require('./src/routes/users')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

// Aqui invocamos a las rutas
app.use("/api", require('./src/routes'));

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})

dbConnect().then(respose=>{})
