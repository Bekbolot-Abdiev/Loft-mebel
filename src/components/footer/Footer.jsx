import React from 'react'
import styles from './Footer.module.css'
import { useTranslation } from 'react-i18next'
const Footer = () => {
	const {t, i18n} = useTranslation()
	return (
		<div className={styles.footer}>
			<div className={styles.category}>
				<h4>{t("НАВИГАЦИЯ")}</h4>
				<div className={styles.boxes}>
					<div className={styles.box}>
						<p>{t("Кухни")}</p>
						<p>{t("Спальни")}</p>
						<p>{t("Гостинные")}</p>
					</div>
					<div className={styles.box}>
						<p>{t("Прихожие")}</p>
						<p>{t("Офисная мебель")}</p>
						<p>{t("Детская")}</p>
					</div>
					<div className={styles.box}>
						<p>{t("Шкафы")}</p>
						<p>{t("Матрасы")}</p>
						<p>{t("Мягкая мебель")}</p>
					</div>
				</div>
				<div className={styles.newPromotion}>
					<h7>{t("Акция")}</h7>
					<p>{t("Новинки")}</p>
				</div>
			</div>

			<div className={styles.contact}>
				<h1>LM</h1>
				<h6>{t("г. Анапа, Анапское шоссе, 30 Ж/К Черное море")}</h6>
				<div className={styles.cards}>
					<div className={styles.card}>
						<h7>
							<i className='bi bi-telephone'></i>
						</h7>
						<p>8 (964) 89 99 119</p>
					</div>
					<div className={styles.card}>
						<h7>
							<i className='bi bi-instagram'></i>
						</h7>
						<p>INSTAGRAM</p>
					</div>
					<div className={styles.card}>
						<h7>
							<i className='bi bi-envelope'></i>
						</h7>
						<p>mebel_loft_anapa@mail.ru</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
