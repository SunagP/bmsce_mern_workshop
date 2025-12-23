const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users.js')
const app = express()
const port = 3001
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://<user_name>:<password>@mydatabase.91pkxdk.mongodb.net/?appName=mydatabase")

// Get all users
app.get('/', (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Get single user by ID
app.get('/getuser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({_id: id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Create user
app.post('/createuser', (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Update user
app.put('/updateuser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id: id}, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Delete user
app.delete('/deleteuser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)

})
