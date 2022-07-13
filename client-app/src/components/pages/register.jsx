import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const register = () => {
	// useStates
	const [user, setUser] = useState('')
	const [userNameTouched, setUserNameTouched] = useState(false)

	const [password, setPassword] = useState('')
	const [passwordTouched, setPasswordTouched] = useState(false)

	const [email, setEmail] = useState('')
	const [emailTouched, setEmailTouched] = useState(false)

	const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
	const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
	const EML_REGEX =
		/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

	const userIsValid = user.trim() !== '' || USER_REGEX.test(user)
	const emailIsValid = email.trim() !== '' || PWD_REGEX.test(email)
	const passwordIsValid = password.trim() !== '' || EML_REGEX.test(password)

	const userInputIsInvalid = !userIsValid && userNameTouched
	const passwordInputIsInvalid = !passwordIsValid && passwordTouched
	const emailInputIsInvalid = !emailIsValid && emailTouched

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

	const userBlurHandler = () => {
		setUserNameTouched(true)
	}
	const passwordBlurHandler = () => {
		setPasswordTouched(true)
	}
	const emailBlurHandler = () => {
		setEmailTouched(true)
	}

	// onSubmitHandler
	const submitHandler = (event) => {
		event.preventDefault()

		setUserNameTouched(true)
		setEmailTouched(true)
		setPasswordTouched(true)

		if (!userIsValid || !emailIsValid || passwordIsValid) {
			return
		}

		setUser('')
		setEmail('')
		setPassword('')

		setUserNameTouched(false)
		setEmailTouched(false)
		setPasswordTouched(false)
	}

	const InputClasses =
		userInputIsInvalid || emailInputIsInvalid || passwordInputIsInvalid
			? 'Form--Area__card-form-input-field-invalid'
			: 'Form--Area__card-form-input-field'

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
								placeholder='Bobiemmkb'
								className='Form--Area__card-form-input-field'
								onChange={userChangeHandler}
								value={user}
								onBlur={userBlurHandler}
								required
							/>
							<label
								htmlFor='text'
								className='Form--Area__card-form-input-label'
							>
								Username
							</label>

							{userInputIsInvalid && (
								<small className='error-text'>
									Name must be 4 to 30 characters.
								</small>
							)}
						</div>
						<div className='Form--Area__card-form-input'>
							<input
								type='text'
								name='email'
								id='email'
								placeholder='Bobiemmkb@email.com'
								className='Form--Area__card-form-input-field'
								onChange={emailChangeHandler}
								value={email}
								onBlur={emailBlurHandler}
								required
							/>
							<label
								htmlFor='Email'
								className='Form--Area__card-form-input-label'
							>
								Email
							</label>

							{emailInputIsInvalid && (
								<small className='error-text'>
									Email must be 6 to 30 characters.
								</small>
							)}
						</div>
						<div className='Form--Area__card-form-input'>
							<input
								className='Form--Area__card-form-input-field'
								type='password'
								name='password'
								id='password'
								onChange={passwordChangeHandler}
								value={password}
								onBlur={passwordBlurHandler}
								required
							/>
							<label
								htmlFor='Password'
								className='Form--Area__card-form-input-label'
							>
								Password
							</label>

							{passwordInputIsInvalid && (
								<small className='error-text'>
									Password must be 8 to 30 with special
									characters.
								</small>
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
