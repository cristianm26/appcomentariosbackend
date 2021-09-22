const express = require('express');
const { crear,
    obtenerComentario,
    eliminarComentario } = require('../controllers/comentarioController');

const router = express.Router();


router.post('/', crear);

router.get('/', obtenerComentario);

router.delete('/:id', eliminarComentario);

module.exports = router;