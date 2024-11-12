const router = require('express').Router();
const Tripulacion = require('../../models/tripulacion.model');

// Ruta para obtener todas las tripulaciones
router.get('/', async (req, res) => {
    try {
        const tripulaciones = await Tripulacion.find();
        res.json(tripulaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tripulaciones', error });
    }
});

// Ruta para obtener una tripulacion por su ID
router.get('/:tripulacionID', async (req, res) => {
    try {
        const tripulacion = await Tripulacion.findById(req.params.tripulacionID);
        if (!tripulacion) return res.status(404).json({ message: 'Tripulacion no encontrada' });
        res.json(tripulacion);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tripulacion', error });
    }
});

module.exports = router;
