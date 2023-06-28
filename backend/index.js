const express = require  ("express")
const sequelize = require  ("./database.js")
const User = require('./User.js')
const router = require('./router')


sequelize.sync().then(()=> console.log('db is ready'))

const PORT = 7000;

const app = express()

app.use(express.json())
app.use('/api', router)


app.get('/', (req, res)=>{
    User.create(req.body).then(()=>{
        console.log(req.query);
            res.status(200).json('USER IS INSERTED')
    })

})

app.listen(PORT, ()=> console.log("SERVER STARTED ON PORT "+ PORT))



