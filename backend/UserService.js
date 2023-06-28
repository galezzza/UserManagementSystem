const User = require("./User");

class UserService {

    async create(user){
        const createdUser = await User.create(user)
        console.log()
        return createdUser
    }

    async getAll(){
        const foundUsers = await User.findAll()
        console.log()
        return foundUsers
    }
    async getOne(user){
        const {login} = user
        if(!login){
            throw new Error('ID NOT FOUND')
        }
        const foundUser = await User.findOne({where: {login: login}})
        console.log()
        return foundUser
    }

    async update(user){
        const updatedUser = await User.update(user, {where:{login: user.login}})
        console.log()
        return updatedUser
    }
    async delete(user){
        const {login} = user
        if(!login){
            throw new Error('ID NOT FOUND')
        }
        const deletedUser = await User.update({idDeleted: 1},{where:{login: login}})
        console.log()
        return deletedUser
    }

}

module.exports = new UserService