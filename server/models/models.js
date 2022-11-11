const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    link: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Repo = sequelize.define('repo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    url: {type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    comment: {type: DataTypes.STRING, defaultValue: ''}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER}
})

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING},
})


const Link = sequelize.define('link', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    url: {type: DataTypes.STRING, unique: true, allowNull: false},
    title: {type: DataTypes.STRING}
})

User.hasMany(Link)
Link.belongsTo(User)
User.hasMany(Rating)
Rating.belongsTo(User)
User.hasMany(Comment)
Comment.belongsTo(User)

Repo.hasMany(Rating)
Rating.belongsTo(Repo)
Repo.hasMany(Comment)
Comment.belongsTo(Repo)

Comment.hasMany(Comment)
Comment.belongsTo(Comment)

module.exports = {
    User,
    Repo,
    Link,
    Rating,
    Comment
}