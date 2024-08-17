const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userModel = require('../models/UserModel');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new userModel({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(() => res.status(400).json({ message: "L'adresse mail ou mot de passe renseignés sont déjà utilisés." }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  userModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'Identifiants incorrects !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
                {userId: user._id},
                process.env.RANDOM_TOKEN_SECRET,
                {expiresIn: '24h'}
            )
          });
        })
        .catch(error => res.status(500).json({ error: "Une erreur s'est produite. Veuillez réessayer plus tard." }));
    })
    .catch(error => res.status(500).json({ error: "Une erreur s'est produite. Veuillez réessayer plus tard." }));
};