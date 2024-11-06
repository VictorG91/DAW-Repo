const express = require('express');
const router = express.Router();
const Character = require('../models/Character');

router.get('/', async (req, res) => {
   try {
      const characters = await Character.find();
      res.json(characters);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

router.post('/', async (req, res) => {
   const { name, bounty, devil_fruit, role, crew } = req.body;
   const character = new Character({ name, bounty, devil_fruit, role, crew });
   try {
      await character.save();
      res.status(201).json(character);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
});

module.exports = router;
