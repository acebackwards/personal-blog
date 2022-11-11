const {Comment} = require('../models/models')

class CommentController {
    async create(req, res) {
        return res.json({message: 'create'})
    }

    async edit(req, res) {
        return res.json({message: 'edit'})
    }

    async delete(req, res) {
        return res.json({message: 'delete'})
    }

}

module.exports = new CommentController()