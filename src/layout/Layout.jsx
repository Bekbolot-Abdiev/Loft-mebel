import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Detail from '../pages/detail/Detail'
import Home from '../pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from '../pages/cart/Cart'
import Favorites from '../pages/favorites/Favorites'
import AboutUs from '../pages/aboutUs/AboutUs'
import SignIn from '../components/signIn/SignIn'
import Contacts from '../pages/Contacts/Contacts'
// import { useTranslation } from 'react-i18next'

const Layout = () => {
	// const {t, i18n} = useTranslation();
	return (
		<div>
			<ToastContainer />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about_us' element={<AboutUs />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/contacts' element={<Contacts/>} />
				<Route path='/favorites' element={<Favorites />} />
				{/* <Route path='/auth' element={<SignIn/>} /> */}
			</Routes>
			<Footer />
		</div>
	)
}

export default Layout

{
	/* <Detail /> */
}
