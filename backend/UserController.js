const User = require("./User.js");
const UserService = require("./UserService.js")
class UserController{
    async create(req, res){
        try {
            const usr = await UserService.create(req.body)
            //"USER IS ADDED SUCCESSFULLY"
            res.status(200).json(usr)
        }catch (e){
            res.status(500).json(e.errors)
        }
    }

    async getAll(req, res){
        try{
            const usr = await UserService.getAll()
            console.log(usr)
            res.status(200).json(usr)
        }catch (e){
            res.status(500).json(e.errors)
        }
    }
    async getOne(req, res){
        try{
            const usr = await UserService.getOne(req.params)
            if(usr===null){
                res.status(200).json({"name":"null"})
            }else {
                res.status(200).json(usr)
            }
        }catch (e){
            res.status(500).json(e.errors)
        }
    }

    async update(req, res){
        try{
            const usr = await UserService.update(req.body)
            // "DATA IS MODIFIED SUCCESSFULLY"
            res.status(200).json(usr)
        }catch (e){
            res.status(500).json(e.errors)
        }
    }
    async delete(req, res){
        try{
            const usr = await UserService.delete(req.params)
            // "USER IS DELETED SUCCESSFULLY"
            res.status(200).json(usr)
        }catch (e){
            res.status(500).json(e.errors)
        }
    }
}

module.exports = new UserController