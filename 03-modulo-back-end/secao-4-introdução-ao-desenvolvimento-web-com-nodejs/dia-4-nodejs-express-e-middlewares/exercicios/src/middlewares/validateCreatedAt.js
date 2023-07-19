const validateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!regex.test(createdAt)) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }

  next();
};

module.exports = validateCreatedAt;
