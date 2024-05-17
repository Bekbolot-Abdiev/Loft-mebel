import React, { useEffect, useState } from 'react'
import style from './Detail.module.css'
import image from '../../assets/image.svg'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { loadDetailProducts } from '../../store/slices/detailSlice'
import { addItem } from '../../store/slices/cartSlice'
import { useTranslation } from 'react-i18next'

const Detail = () => {
	const {t, i18n} = useTranslation()
	const params = useParams()
	const dispatch = useDispatch()
	const { detailProducts } = useSelector(state => state.productsDetail)
	const [rating, setRating] = useState(null)
	const [hover, setHover] = useState(null)
	const addToCart = (productsDetail) => {
		toast.success('Товар добавлен в корзину')
		dispatch(addItem(productsDetail))
	}

	console.log(detailProducts)


	useEffect(() => {
		if (params.id) {
			dispatch(loadDetailProducts(params.id))
		}
	}, [dispatch, params.id])

	if (detailProducts === null) {
		return <h1>Loading...</h1>
	}

	return (
		<div className={style.block_detail}>
			<div className={style.detail}>
				<div className={style.detailImg}>
					<div className={style.basic_img}>
						<img width={600} src={detailProducts.img} alt='' />
					</div>
				</div>

				<div className={style.furnitureInformation}>
					<div className={style.rating}>
						{[...Array(5)].map((star, index) => {
							const currentRating = index + 1
							return (
								<span key={index}>
									<FaStar
										className={style.star}
										size={18}
										color={
											currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'
										}
										onMouseEnter={() => setHover(currentRating)}
										onMouseLeave={() => setHover(null)}
										onClick={() => setRating(currentRating)}
									/>
								</span>
							)
						})}
					</div>

					<div className={style.item}>
						<h2>{t(detailProducts.title)}</h2>
						<p>{t(detailProducts.name)}</p>
					</div>

					<div className={style.priceBtnLike}>
						<h3>{detailProducts.price} {t("сом")}</h3>
						<button
							
							onClick={() => {
								addToCart()
							}}
						>
							{t("Купить")}
						</button>
						<h5>
							<i className='bi bi-suit-heart'></i>{t("Добавить в желаемое")}
						</h5>
					</div>

					<div className={style.description}>
						<h3>{t("Описание")}</h3>
						<p>{t(detailProducts.description)}</p>
					</div>

					<div className={style.characteristic}>
						<p>{t("Размер")} ................................ {t(detailProducts.size)}</p>
						<p>{t("Производитель")}................... {t(detailProducts.madein)}</p>
						<p>{t("Вариант доставки")}.............. {t(detailProducts.delivery)}</p>
						<p></p>
					</div>
				</div>
			</div>

			{/* <h4>Характеристики</h4> */}

			{/* <p></p> */}
		</div>
	)
}

export default Detail
