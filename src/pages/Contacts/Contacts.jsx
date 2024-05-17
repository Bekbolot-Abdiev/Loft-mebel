import React from 'react'
import styles from './Contacts.module.css'
import { useTranslation } from 'react-i18next'

const Contacts = () => {
	const {t, i18n} = useTranslation()
	return (
		<div className={styles.contacts}>
			<h1>{t("Свяжитесь с нами")}</h1>
			<div className={styles.all_contact}>
				<div className={styles.tel_email}>
					<div className={styles.tel}>
						<h7>
							<i className='bi bi-telephone'></i>
						</h7>
						<p>8 (964) 89 99 119</p>
					</div>
					<div className={styles.tel}>
						<h7>
							<i className='bi bi-envelope'></i>
						</h7>
						<p>mebel_loft_anapa@mail.ru</p>
					</div>
				</div>
				<div className={styles.inst}>
					<h7>
						<i className='bi bi-instagram'></i>
					</h7>
					<p>INSTAGRAM</p>
				</div>
				<p>{t("Адрес: г. Анапа, Анапское шоссе, 30 Ж/К Черное море")}</p>
			</div>

			<div className={styles.map}>
				<p>{t("Адрес нашей компании")}</p>
				<iframe
					className={styles.googleMap}
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.74256946774!2d74.50945967846353!3d42.87697130659798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1714935986692!5m2!1sru!2skg'
					width='1200'
					height='600'
					frameBorder='0'
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</div>
	)
}

export default Contacts
