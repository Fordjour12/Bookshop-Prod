import React from 'react'

const loginpage = () => {
	return (
		<div className='Login'>
			<div className='Login--Area'>
				<div className='Login--Area__card'>
					<div className='Login--Area__card-img'>
						<h2 className='Login--Area__card-img-h2'>
							Get Started
							<small>Let us create your account</small>
						</h2>
					</div>
					<form action='' className='Login--Area__card-form'>
						<div className='Login--Area__card-form-input'>
							<input
								type='text'
								name='full_name'
								id='full_name--input-field'
								placeholder='Bobie Fordjour McCamble Kofi'
								className='Login--Area__card-form-input-field'
							/>
							<label
								htmlFor='full_name'
								className='Login--Area__card-form-input-label'
							>
								Full Name
							</label>
						</div>
						<div className='Login--Area__card-form-input'>
							<input
								type='text'
								name='full_name'
								id='full_name--input-field'
								placeholder='Bobiemmkb@email.com'
								className='Login--Area__card-form-input-field'
							/>
							<label
								htmlFor='Email'
								className='Login--Area__card-form-input-label'
							>
								Email
							</label>
						</div>
						<div className='Login--Area__card-form-input'>
							<input
								type='text'
								name='full_name'
								id='full_name--input-field'
								placeholder='Password'
								className='Login--Area__card-form-input-field'
							/>
							<label
								htmlFor='password'
								className='Login--Area__card-form-input-label'
							>
								Password
							</label>
						</div>
						<div className='Login--Area__card-form-cta'>
							<button className='Login--Area__card-form-cta-btn'>
								Get Started
							</button>
						</div>
					</form>
					<div className='Login--Area__card-form-info'>
						<p>
							By signin gup you are agreeing to our{' '}
							<a href='#'>Terms and Conditions</a>
						</p>
					</div>
				</div>
			</div>
			<div className='Login--Image'></div>
		</div>
	)
}

export default loginpage
