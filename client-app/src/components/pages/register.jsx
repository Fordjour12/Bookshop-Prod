import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const register = () => {
	const userRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()

	// useStates
	const [user, setUser] = useState('')
	const [userIsValid, setUserIsValid] = useState(false)
	const [userNameTouched, setUserNameTouched] = useState(false)

	const [password, setPassword] = useState('')
	const [passwordIsValid, setPasswordsValid] = useState(false)
	const [passwordTouched, setPasswordTouched] = useState(false)

	const [email, setEmail] = useState('')
	const [emailIsValid, setEmailIsValid] = useState(false)
	const [emailTouched, setEmailTouched] = useState(false)

	// onChangeHandlers
	const userChangeHandler = (event) => {
		setUser(event.target.value)
	}
	const passwordChangeHandler = (event) => {
		setPassword(event.target.value)
	}
	const emailChangeHandler = (event) => {
		setEmail(event.target.value)
	}

	// useEffectHandlers
	// useEffect(() => {
	// 	userRef.current.focus()
	// 	emailRef.current.focus()
	// 	passwordRef.current.focus()
	// })

	//valid &&touched states

	const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
	const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
	const EML_REGEX =
		/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

	// onSubmitHandler
	const submitHandler = (event) => {
		event.preventDefault()
		const userRegexTest = USER_REGEX.test(user)
		const emailRegexTest = EML_REGEX.test(email)
		const passwordRegexTest = PWD_REGEX.test(password)

		setUserNameTouched(true)
		setEmailTouched(true)
		setPasswordTouched(true)

		if (
			user.trim() === '' ||
			password.trim() === '' ||
			email.trim() === '' ||
			userRegexTest ||
			emailRegexTest ||
			passwordRegexTest
		) {
			setUserIsValid(false)
			setEmailIsValid(false)
			setPasswordsValid(false)
			return
		}

		setUserIsValid(true)
		setEmailIsValid(true)
		setPasswordsValid(true)
	}

	const userInputIsInvalid = !userIsValid && userNameTouched
	const passwordInputIsInvalid = !passwordIsValid && passwordTouched
	const emailInputIsInvalid = !emailIsValid && emailTouched

	return (
		<div className='Form Register'>
			<div className='Form--Area'>
				<div className='Form--Area__card'>
					<div className='Form--Area__card-img'>
						<h2 className='Form--Area__card-img-h2'>
							Get Started
							<small>Let us create your account</small>
						</h2>
					</div>
					<form
						onSubmit={submitHandler}
						className='Form--Area__card-form'
					>
						<div className='Form--Area__card-form-input'>
							<input
								type='text'
								name='username'
								id='username'
								ref={userRef}
								placeholder='Bobiemmkb'
								className='Form--Area__card-form-input-field'
								onChange={userChangeHandler}
								value={user}
								required
							/>
							<label
								htmlFor='text'
								className='Form--Area__card-form-input-label'
							>
								Username
							</label>

							{userInputIsInvalid && (
								<p className='error-text'>
									Name must not be empty ,6 to 30 characters.
									<br />
									Must begin with a letter, numbers,special
									character
								</p>
							)}
						</div>
						<div className='Form--Area__card-form-input'>
							{/* <input
								type='email'
								name='email'
								id='email'
								ref={emailRef}
								placeholder='Bobiemmkb@email.com'
								className='Form--Area__card-form-input-field'
								onChange={emailChangeHandler}
								value={email}
							/>
							<label
								htmlFor='Email'
								className='Form--Area__card-form-input-label'
							>
								Email
							</label> */}
							<input
								type='text'
								className='Form--Area__card-form-input-field'
								// value='vlockn@gmail.com'
								required
							/>
							<label className='Form--Area__card-form-input-label'>
								Email
							</label>

							{emailInputIsInvalid && (
								<p className='error-text'>
									Name must not be empty ,6 to 30 characters.
									<br />
									Must begin with a letter, numbers,special
									character
								</p>
							)}
						</div>
						<div className='Form--Area__card-form-input'>
							<input
								className='Form--Area__card-form-input-field'
								type='password'
								name='password'
								id='password'
								ref={passwordRef}
								onChange={passwordChangeHandler}
								value={password}
								required
							/>
							<label
								htmlFor='Password'
								className='Form--Area__card-form-input-label'
							>
								Password
							</label>

							{passwordInputIsInvalid && (
								<p className='error-text'>
									Name must not be empty ,6 to 30 characters.
									<br />
									Must begin with a letter, numbers,special
									character
								</p>
							)}
						</div>

						<div className='Form--Area__card-form-cta'>
							<button className='Form--Area__card-form-cta-btn'>
								Get Started
							</button>
						</div>
					</form>
					<div className='Form--Area__link'>
						<small>Don&apos;t have an account</small>?{' '}
						<Link to='/login'>sign in</Link>
					</div>
					<div className='Form--Area__card-form-info'>
						<p>
							By signing up you are agreeing to our{' '}
							<a href='#'>Terms and Conditions</a>
						</p>
					</div>
				</div>
			</div>
			<div className='Form--Image'></div>
		</div>
	)
}

export default register
