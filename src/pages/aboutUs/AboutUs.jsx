import React from 'react'
import styles from './AboutUs.module.css'
import section from "../../assets/section.svg"
import Section2 from './section_2/Section2'
import Section3 from './section_3/Section3'
import Section4 from './section_4/Section4'
import Section5 from './section_5/Section5'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
	const {t, i18n} = useTranslation()
	return (
		<div className={styles.aboutUs}>
			<div className={styles.section_1}>
				<div className={styles.section_1_text}>
					<h2>{t('О магазине')}</h2>
					<h5>
						{t(
							'Интернет-магазин «Лофт Мебель»: купите хорошую мебель в один клик!'
						)}
					</h5>
					<p>
						{t(
							'Уникальный формат интернет-магазина позволит вам купить лучшую мебель крупнейших российских фабрик максимально быстро и по выгоднойцене!'
						)}
					</p>
					<p>
						{t(
							'Мы благодарим за доверие более десятка производителей, которые далинам возможность представлять лучшие образцы их продукции вроссийском интернет-пространстве. Прямые договоры на поставку мебелис фабрик обеспечивают наиболее привлекательные условия для нашихпокупателей.'
						)}
					</p>
				</div>

				<div className={styles.sectionImg}>
					<img src={section} alt='' />
				</div>
			</div>

			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
		</div>
	)
}

export default AboutUs
