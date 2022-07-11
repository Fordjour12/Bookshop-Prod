import React from 'react'
import Logo from '../../../assets/phantom Icon/phantom 2.png'
import { NavigationData } from '../../data/navigationData'
import { Link } from 'react-router-dom'
import Login from '../interfaces/login'

const navigation = () => {
	// BoxIconsColor declaration
	// const BoxIconColor = 'white'
	// BoxIconsAnimation declaration
	// const BoxIconsAnimation = 'tada-hover'
	return (
		<div className='sidebar'>
			<header className='header'>
				<a href='#' className='header_link'>
					<img src={Logo} className='header_logo' alt='logo' />
				</a>
			</header>

			<nav className='navigation'>
				<ul className='navigation_lists'>
					{NavigationData.map((Items, idx) => {
						const { icon, link, text } = Items
						return (
							<li key={idx} className='navigation_lists-items'>
								<Link
									to={link}
									className='navigation_lists-items-link'
								>
									{icon}
									<p className='navigation_lists-items-link-p'>
										{text}
									</p>
								</Link>
							</li>
						)
					})}
				</ul>

				<Login classes='login__cta' />
			</nav>
		</div>
	)
}

export default navigation
