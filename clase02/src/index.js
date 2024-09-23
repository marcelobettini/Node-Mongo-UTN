const express = require('express')
const path = require('node:path')
const app = express()
const PORT = process.env.PORT ?? 3000

const { women } = require('./data/women.json')

//Template Engine config
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, (err) => {
    err ?
        console.log(`Server failed with error: ${err}`)
        :
        console.log(`
    Server up http://localhost:${PORT}
    Ctrl+C to exit.
    `)
})


app.get("/", (req, res) => {
    //esta linea no llega a ejecutarse porque index.html vive en la carpeta public y se carga apenas entra una peticion a esta ruta con el metodo GET
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get("/women", (req, res) => {

    res.render('women', { info: women })
})
app.get('/about', (req, res) => res.render('about'))
