// backend/src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Routes publiques
router.get('/transporteurs', userController.getTransporteurs);
router.get('/profile/:userId', userController.getUserProfile);

// Routes protégées
router.use(auth);
router.get('/profile', userController.getMyProfile);
router.put('/profile', userController.updateMyProfile);

module.exports = router;