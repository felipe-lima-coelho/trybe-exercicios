const express = require('express');
const existingBody = require('../middlewares/existingBody');
const { addToFile } = require('../helpers/files');

const router = express.Router();

router.post('/activities', existingBody, async (req, res) => {
  await addToFile(req.body);
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;
