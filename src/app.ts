import express from 'express'
import { Producto } from './producto'
import {CommonRoutesConfig} from './rutas/common.route.config'
import {UsersRoutes} from './rutas/users.route.config'

const routes: Array<CommonRoutesConfig> = []
const app = express()


let productos: Producto [] = []
routes.push(new UsersRoutes(app, productos))

app.use(express.static('public'))

app.listen(8080, () => {
    console.log('escuchando en 8080')
}).on('error', console.log);