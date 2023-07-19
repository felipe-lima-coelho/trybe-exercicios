const express = require('express');
const existingName = require('../middlewares/validateName');
const { addToFile } = require('../helpers/files');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');

const router = express.Router();

router.post(
  '/activities',
  validatePrice,
  existingName,
  validateDescription,
  async (req, res) => {
  await addToFile(req.body);
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
},
);

module.exports = router;
