const express = require('express');
const router = express.Router();
const Pirata = require('../../models/Pirata');

router.get('/', async (req, res) => {
   try {
      const piratas = await Pirata.find();
      res.json(piratas);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

router.post('/', async (req, res) => {
   const { nombre, edad, tripulacion, capitan, recompensa, habilidad, fruta_del_diablo, descripcion } = req.body;
   const pirata = new Pirata({ nombre, edad, tripulacion, capitan, recompensa, habilidad, fruta_del_diablo, descripcion });
   try {
      await pirata.save();
      res.status(201).json(pirata);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
});

module.exports = router;
