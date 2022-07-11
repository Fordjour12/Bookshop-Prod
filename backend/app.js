import express, { json, urlencoded } from 'express'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import volleyball from 'volleyball'
import createError from 'http-errors'
import 'dotenv/config'

// Directories imports
import CustomerRouter from './routes/customer.routes.js'

const app = express()

// middleware
app.use(cors())
app.use(volleyball)
app.use(compression())
app.use(helmet())
app.use(json())
app.use(urlencoded({ extended: false }))

app.get('/', async (_request, response) => {
	response.send(`
	<div>
		<h1>Express</h1>
		<p>Express web server ............💃💃💃💃💃💃</p>
	</div>
	`)
})

// Routes
app.use(CustomerRouter)

app.use(async (_request, _response, next) => {
	next(createError.NotFound())
})

// error middleware catches all error
app.use((error, _request, response) => {
	const status = error.statusCode || 500
	const message = error.message
	const data = error.data
	response.status(status).json({ message: message, data: data })
})

const port = process.env.PORT

app.listen(port, () => {
	console.log('Hello World listening on port', port)
})
