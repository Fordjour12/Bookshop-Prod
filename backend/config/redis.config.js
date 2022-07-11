import { createClient } from 'redis'
const client = createClient({
	url: process.env.REDIS_CONNECTION,
})

client.on('connect', () => {
	console.log('Client connection to redis...')
})

client.on('ready', () => {
	console.log('client connected to redis and ready to use...')
})
// 0Oa3&7qIF#M9

client.on('error', (err) => {
	console.log(err.message)
})

client.on('end', () => {
	console.log('Client disconnected from redis')
})

await client.connect()

process.on('SIGINT', () => {
	client.quit()
})

export default client
