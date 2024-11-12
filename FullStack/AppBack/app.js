const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const piratasRoutes = require('./routes/api/piratas');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error('Error de conexión', error));

app.use('/api/piratas', piratasRoutes);

const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Servidor en puerto ${PORT}`);
});
