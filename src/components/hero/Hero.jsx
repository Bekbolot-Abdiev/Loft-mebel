import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'

import hero from '../../assets/hero.svg'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/slices/productsSlices'
import Card from '../card/Card'
import { useTranslation } from 'react-i18next'

const Hero = () => {
	const [filterData, setFilterData] = useState([])
	const [isvisible, setIsvisible] = useState(true)
	const { productsData, isLoading } = useSelector(state => state.products)
	const dispatch = useDispatch()
	const { t, i18n } = useTranslation	()

	useEffect(() => {
		dispatch(getProducts())
	}, [])

	let newCategory = []
	const result = productsData?.filter(el => {
		if (!newCategory.includes(el.category)) {
			newCategory.push(el.category)
		}
	})

	if (isLoading) {
		return <div>Loading...</div>
	}

	console.log(productsData)

	const filterProductsByCategory = e => {
		setIsvisible(false)
		console.log(e.target.innerText)
		const filteredProducts = productsData.filter(
			el => el.category === e.target.innerText
		)
		setFilterData(filteredProducts)
		// dispatch(setProducts(filteredProducts))
	}

	return (
		<div>
			<div className={styles.hero}>
				<div className={styles.category}>
					<div className={styles.boxes}>
						<div className={styles.box}>
							{newCategory?.map(el => (
								<p key={el} onClick={filterProductsByCategory}>
									<a href='#card'>{t(el)}</a>
								</p>
							))}
						</div>
					</div>
				</div>
				<div className={styles.hero_img}>
					<img src={hero} alt='' />
				</div>
				<div className={styles.hero_text}>
					<h1>LOFT {t('МЕБЕЛЬ')}</h1>
					<p>{t('Современная и удобная мебель в Анапе')}</p>

					<a href='#catalog'>
						<button>{t(' СМОТРЕТЬ КАТАЛОГ')}</button>
					</a>
				</div>
			</div>

			<div id='#card' className={styles.card}>
				{filterData?.map(el => (
					<Card {...el} el={el} />
				))}
			</div>
			<div id='catalog' className={styles.card}>
				{isvisible && productsData?.map(el => <Card {...el} el={el} />)}
			</div>
		</div>
	)
}

export default Hero
