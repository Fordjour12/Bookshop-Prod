import React from 'react'
import { Link } from 'react-router-dom'

const loginpage = () => {
	return (
		<div className='Form Login'>
			<div className='Form--Area'>
				<div className='Form--Area__card'>
					<div className='Form--Area__card-img'>
						<h2 className='Form--Area__card-img-h2'>
							Get Loggedin
							<small>Let us get your loggedin</small>
						</h2>
					</div>
					<form action='' className='Form--Area__card-form'>
						<div className='Form--Area__card-form-input'>
							<input
								type='email'
								name='email'
								id='email--input-field'
								placeholder='Bobiemmkb@email.com'
								className='Form--Area__card-form-input-field'
							/>
							<label
								htmlFor='Email'
								className='Form--Area__card-form-input-label'
							>
								Email
							</label>
						</div>
						<div className='Form--Area__card-form-input'>
							<input
								type='password'
								name='password'
								id='password--input-field'
								placeholder='Password'
								className='Form--Area__card-form-input-field'
							/>
							<label
								htmlFor='password'
								className='Form--Area__card-form-input-label'
							>
								Password
							</label>
						</div>
						<div className='Form--Area__card-form-cta'>
							<button className='Form--Area__card-form-cta-btn'>
								Get Loggedin
							</button>
						</div>
					</form>
					<div className='Form--Area__link'>
						<small>Don&apos;t have an account</small>?{' '}
						<Link to='/register'>sign up</Link>
					</div>
					<div className='Form--Area__card-form-info'>
						<p>
							By signing in you are agreeing to our{' '}
							<a href='#'>Terms and Conditions</a>
						</p>
					</div>
				</div>
			</div>
			<div className='Form--Image'></div>
		</div>
	)
}

export default loginpage
