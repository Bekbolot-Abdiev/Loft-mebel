import React from 'react'
import { FaHeart } from 'react-icons/fa'
import styles from './Card.module.css'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/slices/cartSlice'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { addFavoItem } from '../../store/slices/favoritesSlice'


const Card = ({ el, img, title, name, price, size, item }) => {
	// console.log(el);
	const dispatch = useDispatch()
	const {t, i18n} = useTranslation();

	const addToCart = el => {
		toast.success(t(el.title))
		dispatch(addItem(el))
		// console.log(el);
	}

	const addFavorites = el => {
		toast.success('Добавлено в избранное')
		dispatch(addFavoItem(el))
	}
	return (
		<div className={styles.container}>
			<div id='card' className='card d-flex' style={{ width: '19rem' }}>
				<h5 onClick={() => addFavorites(el)} className={styles.heart}>
					<FaHeart />
				</h5>
				<NavLink to={`/detail/${el.id}`}>
					<img src={img} className='card-img-top' alt='...' />
				</NavLink>
				<div className='card-body'>
					<NavLink to={`/detail/${el.id}`}>
						<h5 className='card-title'>{t(title)}</h5>
						<p className='card-text'>{t(name)}</p>
					</NavLink>
					<h5 className='card-title'>{price} сом</h5>
					<div className={styles.content}>
						<h5>{t("Размер")}</h5>
						<p>{t(size)}</p>
						<button
							onClick={() => {
								addToCart(el)
							}}
						>
							{t("Добавить в корзину")}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
