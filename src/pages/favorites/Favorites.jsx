import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styles from './Favorites.module.css'
import { FaHeart } from 'react-icons/fa'
import { removeFavoItem } from '../../store/slices/favoritesSlice'
import { useTranslation } from 'react-i18next'

const Favorites = () => {
  const dispatch = useDispatch()
  const { favoItems } = useSelector(store => store.favorites)
  console.log(favoItems)
  const {t, i18n} = useTranslation()

  

  if (favoItems.length === 0) {
		return <h4>{t("Избранное пусто")}</h4>
	}
  return (
		<div>
			<div className={styles.favorites}>
				{favoItems.map(el => (
					<div key={el.id}>
						<div className={styles.boxes}>
							<div className={styles.box}>
								<div className={styles.heart}>
									<h5 onClick={() => dispatch(removeFavoItem(el))}>
										<FaHeart />
									</h5>
								</div>
								<img width={200} src={el.img} alt='' />
								<h5>
									{t(el.title).length > 20
										? `${t(el.title).slice(0, 20)}...`
										: t(el.title)}
								</h5>
								<p>{t(el.name)}</p>
								<h5>{el.price} {t("сом")}</h5>
								<p>{t("Размер")}</p>
								<h6>{el.size}</h6>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Favorites