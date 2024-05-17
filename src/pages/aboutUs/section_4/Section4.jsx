import React from 'react'
import styles from './Section4.module.css'
import support from '../../../assets/supporticon.svg'
import coopicon from '../../../assets/coopicon.svg'
import boxicon from '../../../assets/boxicon.svg'
import reicon from '../../../assets/reicon.svg'
import { useTranslation } from 'react-i18next'

const Section4 = () => {
	const {t, i18n} = useTranslation()
	return (
		<div className={styles.section4}>
			<img className={styles.support} src={support} alt='' />
			<img className={styles.coopicon} src={coopicon} alt='' />
			<img className={styles.boxicon} src={boxicon} alt='' />
         <img className={styles.reicon} src={reicon} alt="" />
			<div className={styles.boxes}>
				<div className={styles.box}>
					<h4>{t("Особенные условия для оптовиков")}</h4>
					<p>
						{t("Число наших оптовых покупателей неуклонно возрастает и всё потому,что мы сумели предложить владельцам мебельных магазинов наиболеевыгодные условия.")}
					</p>
				</div>
				<div className={styles.box}>
					<h4>{t("Оперативная доставка")}</h4>
					<p>
						{t("Собственная курьерская служба быстро привезет купленную мебель поуказанному адресу. В российские регионы доставка осуществляетсясилами транспортных компаний.")}
					</p>
				</div>
				<div className={styles.box}>
					<h4>{t("Внимательный сервис")}</h4>
					<p>
						{t("Квалифицированные менеджеры интернет-магазина ответят на все вопросыпо ассортименту и предоставляемым возможностям, а также помогутоформить заказ и проконтролируют реализацию клиентских пожеланий призаказе мебели.")}
					</p>
				</div>
				<div className={styles.box}>
					<h4>{t("Каждый пятый покупатель заказывает у нас повторно!")}</h4>
					<p>
						{t("И мы благодарим всех, кто воспользовался нашим уникальнымпредложением, заказал мебель быстро и недорого и порекомендовалдрузьям и знакомым.")}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Section4
