const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const characterRoutes = require('./routes/characters');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('MONGO_URI_AQUI', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error('Error de conexión', error));

app.use('/api/characters', characterRoutes);

const PORT = 5000;
app.listen(PORT, () => {
   console.log(`Servidor en puerto ${PORT}`);
});
