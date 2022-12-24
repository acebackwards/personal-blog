const db = require('../db')

class RepoController {
    async create(req, res) {
        try {
            const {url, title, description, name} = req.body
            const repo = await db.query(`INSERT INTO repos (url, title, description, author) VALUES ($1, $2, $3, $4)`, [url, title, description, name])
            return res.json(repo.rows[0])
        } catch (e) {
            return res.json({message: 'error'})
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.body
            const delAnswer = await db.query(`DELETE FROM comments WHERE repo_id = $1 and parent_id <> 0`, [id])
            const delComment = await db.query(`DELETE FROM comments WHERE repo_id = $1`, [id])
            const deleteRating = await db.query(`DELETE FROM ratings WHERE repo_id = $1`, [id])
            const repo = await db.query(`DELETE FROM repos WHERE id = $1`, [id])
        } catch (e) {
            return res.json({message: 'error'})
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query

        // TODO: make pagination
        page = page || 1
        limit = limit || 5
        let offset = page * limit - limit

        const repos = await db.query(`SELECT * FROM repos ORDER BY id`)
        res.json(repos.rows)
    }

    async getOne(req, res) {
        // return res.json({message: 'getOne'})
        const id = req.params.id
        const repo = await db.query(`SELECT * FROM repos WHERE id = $1`, [id])
        return res.json(repo.rows[0])
    }

}

module.exports = new RepoController()