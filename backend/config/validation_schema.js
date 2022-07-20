import * as yup from 'yup'

const loginAuthSchema = yup.object().shape({
	email: yup.string().lowercase().required(),
	password: yup.string().min(6).max(30).required(),
})

// loginAuthSchema.validateAt
export { loginAuthSchema }

// {
//   "username": "Logi Jameson21",
//   "email": "JamesonLowg1i@email.com",
//   "password": "BoyIsGoing1"
// }
