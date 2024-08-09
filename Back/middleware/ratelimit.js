const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 20,
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
  message: "Trop de tentatives de connexion à partir de cette IP, veuillez réessayer après 15 minutes."
})

module.exports = {
  limiter
};