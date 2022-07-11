import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/homepage'
import Library from './components/pages/library'
import LoginPage from './components/pages/loginpage'
import Authors from './components/pages/authors'
import Categories from './components/pages/categories'
import Recommended from './components/pages/recommended'
import './scss/stylesheet.scss'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/library' element={<Library />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/recommended' element={<Recommended />} />
			<Route path='/categories' element={<Categories />} />
			<Route path='/authors' element={<Authors />} />
		</Routes>
	)
}

export default App
