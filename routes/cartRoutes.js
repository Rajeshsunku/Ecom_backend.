const express = require('express')
const { route } = require('./authroutes')
const authMiddleware = require('../middleware/authmiddleware')
const { addToCart } = require('../controllers/cartController')

const cartrouter = express.Router()
cartrouter.post("/add",authMiddleware,addToCart)
cartrouter.get("/",authMiddleware)
cartrouter.post("/remove",authMiddleware)
module.exports= cartrouter