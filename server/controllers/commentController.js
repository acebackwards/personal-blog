// const {Comment} = require('../models/models')
const ApiError = require('../error/ApiError')
const db = require('../db')

class CommentController {
    async create(req, res) {
        try {
            const {text, user_id, repo_id, parent_id} = req.body
            const comment = await db.query(`INSERT INTO comments (text, user_id, repo_id, parent_id) VALUES ($1, $2, $3, $4) RETURNING *`, [text, user_id, repo_id, parent_id]) 
            return res.json(comment.rows[0])
        } catch (e) {
            return res.json({message: 'error creating'})
        }
    }

    // async edit(req, res) {
    //     return res.json({message: 'edit'})
    // }

    async delete(req, res) {
        try {
            const {comment_id, user_id, role} = req.body
            const authorId = await db.query(`SELECT * FROM comments WHERE id = $1`, [comment_id])
           
            if (user_id == authorId.rows[0].user_id || role == 'ADMIN') {
                const comment = await db.query(`DELETE FROM comments WHERE id = $1 RETURNING *`, [comment_id])
                return res.json(comment.rows[0])
            }
            return next(ApiError.badRequest('You are not the author of this comment'))
            
            
        } catch (e) {
            return res.json({message: 'error deleting'})
        }
    }

    async getAll(req, res) {
        try {
            const comments = await db.query(`SELECT * FROM comments`)

            return res.json(comments.rows)
        } catch (e) {
            return next(ApiError.badRequest('Something went wrong...'))
        }
    }
}

module.exports = new CommentController()