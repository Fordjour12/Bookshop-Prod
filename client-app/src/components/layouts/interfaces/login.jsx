import React from 'react'
import 'boxicons'
import { Link } from 'react-router-dom'

const login = ({ classes }) => {
	return (
		<div className={classes}>
			<Link to='/login' className='navigation_lists-items-link'>
				<box-icon type='solid' color='white' name='log-in'></box-icon>
				<p className='navigation_lists-items-link-p'>Login</p>
			</Link>
		</div>
	)
}

export default login
