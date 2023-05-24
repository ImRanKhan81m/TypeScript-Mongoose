import express, { Application} from 'express'
import cors from 'cors'

const app: Application = express()

import userRoutes  from '../src/app/modules/user/user.route'

const corsFonfig = {
    origin: true,
    credentials: true,
}
app.use(express.json())
app.use(cors(corsFonfig));
app.options('*', cors(corsFonfig));
app.use(express.urlencoded({ extended: true }))


// app.get('/api/v1/user', userRoutes)
app.use('/api/v1/user', userRoutes)


// main route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

export default app
