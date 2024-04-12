
const express = require('express')
const app = express()

app.use(express.json())

// rotas
const tarefasRouter = require('./routes/listatarefas')
app.use(tarefasRouter)


app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})
