import jwt from 'jsonwebtoken'
import createError from 'http-errors'
import client from './redis.config.js'

client.set('kofi', 'cars')

const signAccessToken = (customer_Id) => {
	return new Promise((resolve, reject) => {
		const payload = {}
		const secret = process.env.ACCESS_TOKEN_SECRET
		const options = {
			expiresIn: '3d',
			issuer: 'thephantombooks.com',
			audience: customer_Id,
		}
		jwt.sign(payload, secret, options, (error, token) => {
			if (error) {
				console.log(error.message)
				reject(createError.InternalServerError())
				return
			}
			resolve(token)
		})
	})
}

const verifyAccessToken = (Request, _Response, Next) => {
	if (!Request.headers['authorization']) {
		return Next(createError.Unauthorized())
	}
	const authHeader = Request.headers['authorization']
	const bearerToken = authHeader.split(' ')
	const token = bearerToken[1]

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, payload) => {
		if (error) {
			const errorName = 'JsonWebTokenError'
			const message = (error.name = errorName
				? 'Unauthorized'
				: error.message)

			return Next(createError.Unauthorized(message))
		}
		Request.payload = payload
		Next()
	})
}
const signRefreshToken = (customer_Id) => {
	return new Promise((resolve, reject) => {
		const payload = {}
		const secret = process.env.REFRESH_TOKEN_SECRET
		const options = {
			expiresIn: '1y',
			issuer: 'thephantombooks.com',
			audience: customer_Id,
		}
		jwt.sign(payload, secret, options, (err, token) => {
			if (err) {
				console.log(err.message)
				// reject(err)
				reject(createError.InternalServerError())
			}

			client.SET(customer_Id, token, 'EX', 365 * 24 * 60 * 60, (err) => {
				if (err) {
					console.log(err.message)
					reject(createError.InternalServerError())
					return
				}
				resolve(token)
			})
		})
	})
}

const verifyRefreshToken = (refreshToken) => {
	return new Promise((resolve, reject) => {
		jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET,
			(error, payload) => {
				if (error) {
					return reject(createError.Unauthorized())
				}
				const customer_Id = payload.aud
				client.GET(customer_Id, (error, result) => {
					if (error) {
						reject(createError.InternalServerError())
					}

					if (refreshToken === result) {
						return resolve(customer_Id)
					}
					reject(createError.Unauthorized())
				})
			}
		)
	})
}

export {
	signAccessToken,
	verifyAccessToken,
	signRefreshToken,
	verifyRefreshToken,
}
