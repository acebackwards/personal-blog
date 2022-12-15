const ApiError = require('../error/ApiError')
const db = require('../db')

class RatingController {
    async rate(req, res) {
        try {
            const {rate, repo_id, user_id} = req.body
            const existRating = await db.query(`SELECT * FROM ratings WHERE repo_id = $1 AND user_id = $2`, [repo_id, user_id])

            if (existRating && existRating.rows[0].rate != rate) {
                const updateRating = await db.query(`UPDATE ratings SET rate = $1 WHERE repo_id = $2 and user_id = $3 RETURNING *`, [rate, repo_id, user_id])
                return res.json(updateRating.rows)
            } else if (existRating && existRating.rows[0].rate == rate) {
                const deleteRating = await db.query(`DELETE FROM ratings WHERE repo_id = $1 and user_id = $2 RETURNING *`, [repo_id, user_id])
                return res.json(deleteRating.rows)
            } else {
                const rating = await db.query(`INSERT INTO ratings (rate, repo_id, user_id) VALUES ($1, $2, $3) RETURNING *`, [rate, repo_id, user_id])            
                return res.json(rating.rows[0])
            }

            return null
            // // return res.json(existRating.rows)
            // return res.json(rating.rows[0].rate)
        } catch (e) {
            // return next(ApiError.badRequest('Something went wrong...'))
            return res.json({message: 'something went wrong...'})
        }
    }

    async getAll(req, res) {
        try {
            const rating = await db.query(`SELECT * FROM ratings`)
            
            return res.json(rating.rows)
        } catch (e) {
            // return next(ApiError.badRequest('No ratings...'))
            return res.json({message: 'no ratings'})
        }
    }
}

module.exports = new RatingController()