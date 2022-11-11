const {Repo} = require('../models/models')

class RepoController {
    async create(req, res) {
        try {
            const {url, title, description} = req.body
            const repo = await Repo.create({url, title, description})
            return res.json(repo)
        } catch (e) {
            return res.json({message: 'error'})
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query

        page = page || 1
        limit = limit || 5
        let offset = page * limit - limit

        let repo = await Repo.findAndCountAll({limit, offset})
        return res.json(repo)
    }

    async getOne(req, res) {
        // return res.json({message: 'getOne'})
        const {id} = req.params
        const repo = await Repo.findOne({where: {id}})
        return res.json(repo)
    }

}

module.exports = new RepoController()