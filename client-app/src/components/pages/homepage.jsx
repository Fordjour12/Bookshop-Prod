import React from 'react'
import BodyMain from '../layouts/interfaces/body'
import Navigation from '../layouts/interfaces/navigation'

const homepage = () => {
	return (
		<div className='homepage'>
			<Navigation />
			<BodyMain />
		</div>
	)
}

export default homepage
