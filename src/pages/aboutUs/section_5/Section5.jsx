import React from 'react'
import styles from './Section5.module.css'
import okey from '../../../assets/okey.svg'
import { useTranslation } from 'react-i18next'

const Section5 = () => {
	const {t, i18n} = useTranslation()
  return (
		<div className={styles.section5}>
			<h1>{t("Мы поможем сэкономить время, силы и деньги!")}</h1>

			<div className={styles.boxes}>
				<div className={styles.box}></div>
				<img src={okey} alt='' />
				<div className={styles.box_text}>
					<h4>{t("Время.")}</h4>
					<p>
						{t("Примем вашу заявку в кротчайшие сроки. При необходимости подберем для вас достойные варианты по заданным критериям.")}
					</p>
				</div>
				<div className={styles.box}></div>
				<img src={okey} alt='' />
				<div className={styles.box_text}>
					<h4>{t("Силы.")}</h4>
					<p>
						{t("Закупим оптом или закажем на фабрике, избавив от длительныхобсуждений заказа с исполнителем. Курируем все этапы работы надзаказом.")}{' '}
					</p>
				</div>
				<div className={styles.box}></div>
				<img src={okey} alt='' />
				<div className={styles.box_text}>
					<h4>{t("Деньги.")}</h4>
					<p>{t("Вы точно купите мебель дешевле, чем в розницу.")}</p>
				</div>
			</div>

			<h2>{t("На чем мы не экономим?")}</h2>
			<h2>{t("На вашем комфорте и качестве мебели!")}</h2>
		</div>
	)
}

export default Section5