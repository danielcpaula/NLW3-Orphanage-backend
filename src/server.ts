import express from 'express';
import path from 'path'
import cors from 'cors'
import 'express-async-errors'

import './database/connection'

import routes from './routes'
import errorHandler from './error/handler'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

// Rota = Conjunto
// Recurso = Usuário

// Metodo HTTP = GET, POST, PUT, DELETE
// Parametros = 

// GET = Buscar uma informação(Lista, item)
// POST = Criando uma informação nova
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/user?search=diego
// Route Params? http://localhost:3333/user/1 (identificar um recurso)
// Body: http://localhost:3333/user



app.listen(3333)