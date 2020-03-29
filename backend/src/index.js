const express = require('express')
const cors = require('cors')
const routes = require ('./routes')

const app = express()

app.use(cors({}))

app.use(express.json())
app.use(routes)

app.listen(3333)


 /* ROTA / RECURSO */

  /*
  *Metodos HTTP
  *
  * GET: BUSCAR/LISTAR UMA INFORMAÇÃO DO BACKEND
  * POST: CRIAR UMA INFORMAÇÃO NO BACKEND
  * PUT: ALTERAR UMA INFORMAÇÃO NO BACKEND
  * DELETE: DELETAR UMA INFORMAÇÃO DO BACKEND
  */

  /*
  * TIPOS DE PARÂMETROS     
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilziados para identificar recursos
  * Request Body: 
  */


