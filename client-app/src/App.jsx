import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/homepage'
import Library from './components/pages/library'
import LoginPage from './components/pages/loginpage'
import Authors from './components/pages/authors'
import Categories from './components/pages/categories'
import Recommended from './components/pages/recommended'
import Register from './components/pages/register'
import Navigation from './components/layouts/interfaces/navigation'
import './scss/stylesheet.scss'

const App = () => {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '200px 2fr' }}>
			<Navigation />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/library' element={<Library />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/recommended' element={<Recommended />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='/authors' element={<Authors />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	)
}

export default App
