

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Cart.module.css'
import {
	calculateTotal,
	removeItem,
	addItem,
} from '../../store/slices/cartSlice'
import { useTranslation } from 'react-i18next'

const Cart = () => {
	const dispatch = useDispatch()
	const { items, total } = useSelector(store => store.cart)
	const { t } = useTranslation()

	useEffect(() => {
		// Загрузка корзины из localStorage при первой загрузке компонента
		const storedCartItems = JSON.parse(localStorage.getItem('cartItems'))
		if (storedCartItems) {
			storedCartItems.forEach(item => {
				dispatch(addItem(item))
			})
		}
	}, [dispatch])

	useEffect(() => {
		dispatch(calculateTotal())
		// Сохранение корзины в localStorage при каждом изменении items
		localStorage.setItem('cartItems', JSON.stringify(items))
	}, [dispatch, items])

	const totalItemsCount = items.reduce(
		(total, currentItem) => total + currentItem.count,
		0
	)

	if (items.length === 0) {
		return <h4 className={styles.cart_empty}>{t("Корзина пусто")}</h4>
	}

	return (
		<div className={styles.cart}>
			<div className={styles.totalItems}>
				<h4>{t("Ваша корзина")}</h4>
				<p>{totalItemsCount} {t("предмета")}</p>
			</div>
			{items.map(el => (
				<div key={el.id}>
					<div className={styles.cart_item}>
						<div className={styles.item_img}>
							<img src={el.img} alt='' />
							<div className={styles.item_title}>
								<h3>{t(el.title)}</h3>
								<p>
									<span>{t('Размер')}:</span>
									{el.size}
								</p>
								<h6>{el.count}</h6>
							</div>
						</div>
						<div className={styles.item_price}>
							<h4>
								{el.price} {t('сом')}
							</h4>
							<button onClick={() => dispatch(removeItem(el))}>
								<i className='bi bi-x-lg'></i>
							</button>
						</div>
					</div>
				</div>
			))}

			<div className={styles.totalPrice}>
				<p>{t("Итоговая стоимость")}: {total}</p>
				<button>{t("Оформить заказ")}</button>
			</div>
		</div>
	)
}

export default Cart
