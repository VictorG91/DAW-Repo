const router = require('express').Router();
const Pirata = require('../../models/pirata.model');

// Ruta para obtener todos los piratas
router.get('/', async (req, res) => {
    try {
        const piratas = await Pirata.find();
        res.json(piratas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los piratas', error });
    }
});

// Ruta para obtener un pirata por su ID
router.get('/:pirataID', async (req, res) => {
    try {
        const pirata = await Pirata.findById(req.params.pirataID);
        if (!pirata) return res.status(404).json({ message: 'Pirata no encontrado' });
        res.json(pirata);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pirata', error });
    }
});

module.exports = router;
