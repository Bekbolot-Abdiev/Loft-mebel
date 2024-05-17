import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'
import delivery from '../../assets/delivery.svg'
import styles from './Header.module.css'
import Hero from '../hero/Hero'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import './Header.css'
import '../../i18n/i18n'
import { useTranslation } from 'react-i18next'

// const changeLanguage = (language) => {
//     const lang = language.toLowerCase();
//     i18n.changeLanguage(lang);
//     setActive(lang);
//   };

const Header = () => {
	const { t, i18n } = useTranslation()
	const { items } = useSelector(store => store.cart)
	const { favoItems } = useSelector(store => store.favorites)
	// const { lngBtnActive, setLngBtnActive } = useState(false)
	const [active, setActive] = useState('ru')

	const changeLng = language => {
		console.log(language)
		const lang = language.toLowerCase()
		i18n.changeLanguage(lang)
		setActive(lang)
	}

	return (
		<div className={styles.block_1}>
			<div className={styles.header}>
				<NavLink to={'/'}>
					<img width={140} src={Logo} alt='' />
				</NavLink>
				<div className={styles.support}>
					<NavLink to={'/'}>
						<p>{t('Главная')}</p>
					</NavLink>
					<NavLink to={'/about_us'}>
						<p>{t('О нас')}</p>
					</NavLink>
					<NavLink to={'/contacts'}>
						<p>{t('Контакты')}</p>
					</NavLink>
				</div>

				{/* <div className={styles.search}>
					<button>
						<i className='bi bi-search'></i>
					</button>
					<input
						className={styles.search_input}
						type='text'
						placeholder='Поиск'
					/>
				</div> */}

				<div className={styles.contact}>
					<h5>
						<i className='bi bi-telephone'></i>
					</h5>
					<p>8 (964) 89 99 119</p>
				</div>

				<div className={styles.lng}>
					<button
						className={active === 'en' ? styles.active : ''}
						onClick={event => changeLng(event.target.innerText)}
					>
						EN
					</button>
					<button
						className={active === 'ru' ? styles.active : ''}
						onClick={event => changeLng(event.target.innerText)}
					>
						RU
					</button>
				</div>

				<div className={styles.delivery}>
					<img src={delivery} alt='' />
					<p>{t('Доставка')}</p>
				</div>

				<div className={styles.cart}>
					<NavLink to={'/favorites'}>
						<h4>
							<i className='bi bi-suit-heart'></i>
						</h4>
						<div className={styles.favoTotal}>
							{/* <span>{items.length > 0 ? `${items.length}` : null}</span> */}
							<span>
								<p>{favoItems.length}</p>
							</span>
						</div>
					</NavLink>
					<NavLink to={'/cart'}>
						<h4>
							<i className='bi bi-bag-dash'></i>
						</h4>
						<div className={styles.cartTotal}>
							{/* <span>{items.length > 0 ? `${items.length}` : null}</span> */}
							<span>
								<p>{items.length}</p>
							</span>
						</div>
					</NavLink>

					<h4>
						<i className='bi bi-person' src=''></i>
					</h4>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default Header
