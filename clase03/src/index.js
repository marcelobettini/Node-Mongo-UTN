//high level imports
import express from 'express';
import morgan from "morgan";
import helmet from "helmet";

//creamos nuestra version de __dirname y __filename, que no estan disponibles cuando trabajamos con ES Modules, pero si con Common JS (require)
import { fileURLToPath } from 'node:url';
import path from 'node:path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



const PORT = process.env.PORT ?? 3000

//internal imports
import healthRouter from "./routes/healthCheck.js"
import authRouter from "./routes/auth.js"

//rate limiter
import rateLimitConfig from './config/rateLimitConfig.js';


const app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.resolve(__dirname, "public")))

if (process.env.NODE_ENV === 'production') {
    app.use(rateLimitConfig)
    app.use(helmet())
    console.log(`Production mode: Security and performance prioritized`)
} else {
    app.use(morgan('dev'))
    console.log(`Development mode: debugging tools activated`)
}


//healthcheck
app.use('/healthcheck', healthRouter)
app.use('/auth', authRouter)

const bootstrap = async () => {
    try {
        //inicializar conexion a DB
        app.listen(PORT, () => {
            console.log(`Server running http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(`Server failed: ${error.message}`)
    }
}

bootstrap()