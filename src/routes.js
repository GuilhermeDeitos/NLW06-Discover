const express = require('express')
const questionController = require('./controllers/QuestionController')
const routes = express.Router()
const roomController = require('./controllers/roomController')
 /*req = requisição | res = resposta*/
routes.get('/', (req, res) => res.render("index",{page: 'enter-room'})) /*Criar uma rota '/' */   
routes.get('/create-pass',(req,res) => res.render("index",{page: 'create-pass'}))

// : é para criar uma var para receber o conteúdo que vai vir nessa url
routes.post("/create-room", roomController.create) 
routes.get('/room/:room',roomController.open)
routes.post("/enter-room",roomController.enter)

routes.post('/question/create/:room',questionController.create)
//Formato que o formulario de dentro da modal tem que passar a info
routes.post("/question/:room/:question/:action", questionController.index)

module.exports = routes 