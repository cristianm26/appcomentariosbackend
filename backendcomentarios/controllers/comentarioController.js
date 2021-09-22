const Comentario = require('../models/Comentario');

const crear = async (req, res) => {
    try {
        let comentario;
        // guardamos nuestro comentario
        comentario = new Comentario(req.body);
        await comentario.save();
        res.status(200).send(comentario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al guardar Comentario')
    }
}

const obtenerComentario = async (req, res) => {
    try {
        const comentarios = await Comentario.find();
        res.status(200).json(comentarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener los Comentarios')
    }

}


const eliminarComentario = async (req, res) => {
    try {
        let comentario = await Comentario.findById(req.params.id);
        if (!comentario) {
            res.status(404).json({ mensaje: 'No existe el comentario' })
        }

        await Comentario.findOneAndRemove({ _id: req.params.id })
        res.json({ mensaje: 'Comentario Elliminado Correctamente' })

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el Comentario')
    }
}


module.exports = {
    crear,
    obtenerComentario,
    eliminarComentario
}