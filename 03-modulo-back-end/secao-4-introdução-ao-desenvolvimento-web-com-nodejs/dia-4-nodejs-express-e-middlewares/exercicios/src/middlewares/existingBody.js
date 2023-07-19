const existingBody = (req, res, next) => {
  if (!req.body.name) {
    return res.status(404).json({ message: 'É necessário adicionar um body' });
  }
  next();
};

module.exports = existingBody;
