const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

// Inicializando o servidor
const server = express()

// mostra onde fica os arquivos estáticos
server.use(express.static('public'))

// Criando as rotas 
server.use(routes)

// Configuração da View Engine ( nunjucks )
server.set("view engine", "njk")
nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

// Colocando o servidor online
server.listen(5000, function () {
  console.log("server is running")
})