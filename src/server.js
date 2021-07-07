const routes = require('./routes')
const express = require('express')
const path = require('path')

const server = express()

server.set('view engine','ejs')

server.use(express.static("public")) /*vai usar a pasta public*/

server.set('views',path.join(__dirname,"views")) /*join para juntar o path com a pasta views*/

server.use(express.urlencoded({extended: true}))

server.use(routes) /*vai usar o arquivo routes*/
server.listen(3000, () => console.log("Rodando na porta 3000"))

