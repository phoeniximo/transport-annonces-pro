// backend/src/routes/avisRoutes.js
const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avisController');
const auth = require('../middleware/auth');

// Protection de toutes les routes avec authentification
router.use(auth);

// Création d'un avis
router.post('/', avisController.createAvis);

// Obtenir les avis d'un utilisateur spécifique
router.get('/utilisateur/:userId', avisController.getAvisUtilisateur);

// Obtenir les avis donnés par l'utilisateur connecté
router.get('/donnes', avisController.getAvisDonnes);

// Obtenir les avis reçus par l'utilisateur connecté
router.get('/recus', avisController.getAvisRecus);

module.exports = router;