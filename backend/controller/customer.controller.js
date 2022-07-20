import createError from 'http-errors'
import bcrypt from 'bcrypt'
import {
	signAccessToken,
	signRefreshToken,
	verifyRefreshToken,
} from '../config/json_token.config.js'

import Customer from '../models/customer.models.js'
import client from '../config/redis.config.js'

const getRegister = async (Request, Response, Next) => {
	try {
		let userInfo = Customer.fromJson(Request.body)
		const userData = await Customer.query().findOne(userInfo)

		if (userData) {
			throw createError.Conflict(`${userInfo.username} Already Exist`)
		}

		const passwordHash = await bcrypt.hash(Request.body.password, 14)

		const Data = await Customer.query().insert(
			Object.assign(userInfo, { password: passwordHash })
		)
		// console.log(Data)
		const accessToken = await signAccessToken(Data.customer_Id)
		const refreshToken = await signRefreshToken(Data.customer_Id)
		Response.status(201).send({
			message: 'New Customer Created',
			data: Data,
			token: accessToken,
			rfshToken: refreshToken,
		})

		// console.log(refreshToken)
	} catch (error) {
		if (!error.statusCode || error) {
			error.statusCode = createError[400]
		}

		Next(error)
	}
}

const getLoggedIn = async (Request, Response, Next) => {
	try {
		let userInfo = Request.body

		const userData = await Customer.query().first().where({
			email: userInfo.email,
		})

		if (!userData) {
			throw createError.NotFound('User Not found in Database')
		}
		console.log(userData)

		const validPassword = await bcrypt.compare(
			Request.body.password,
			userData.password
		)
		if (!validPassword) {
			throw createError.Unauthorized('Password not valid')
		}
	
		const accessToken = await signAccessToken(userData.customer_Id)
		const refreshToken = await signRefreshToken(userData.customer_Id)

		Response.status(200).send({
			message: 'Successful',
			data: userData,
			token: accessToken,
			rfshToken: refreshToken,
		})
	} catch (error) {
		if (!error.statusCode || error) {
			error.statusCode = createError.BadRequest('invalid data')
		}

		Next(error)
	}
}

const refreshToken = async (Request, Response, Next) => {
	try {
		const { refreshToken } = Request.body
		if (!refreshToken) throw createError.BadRequest()
		const customer_Id = await verifyRefreshToken(refreshToken)
		const accessToken = await signAccessToken(customer_Id)
		const refToken = await signRefreshToken(customer_Id)
		Response.send({ accessToken: accessToken, refreshToken: refToken })
	} catch (error) {
		Next(error)
	}
}

const logout = async (Request, Response, Next) => {
	try {
		const { refreshToken } = Request.body
		if (!refreshToken) throw createError.BadRequest()
		const customer_Id = await verifyRefreshToken(refreshToken)
		client.DEL(customer_Id, (error, val) => {
			if (error) {
				console.log(error.message)
				throw createError.InternalServerError()
			}
			console.log(val)
			Response.sendStatus(204)
		})
	} catch (error) {
		Next(error)
	}
}

export { getRegister, getLoggedIn, refreshToken, logout }
