const router = require('express').Router();
const Marine = require('../../models/marine.model');

// Ruta para obtener todos los marines
router.get('/', async (req, res) => {
    try {
        const marines = await Marine.find();
        res.json(marines);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los marines', error });
    }
});

// Ruta para obtener un pirata por su ID
router.get('/:marineID', async (req, res) => {
    try {
        const marine = await Marine.findById(req.params.marineID);
        if (!marine) return res.status(404).json({ message: 'Marine no encontrado' });
        res.json(marine);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el marine', error });
    }
});

module.exports = router;
