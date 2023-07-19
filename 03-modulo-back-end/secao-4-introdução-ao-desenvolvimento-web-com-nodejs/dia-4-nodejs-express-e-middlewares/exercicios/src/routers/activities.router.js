const express = require('express');
const existingName = require('../middlewares/existingName');
const { addToFile } = require('../helpers/files');

const router = express.Router();

router.post('/activities', existingName, async (req, res) => {
  await addToFile(req.body);
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;
