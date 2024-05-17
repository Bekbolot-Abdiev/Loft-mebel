import React from 'react'
import styles from './Section2.module.css'
import profit from '../../../assets/profit.svg'
import time from '../../../assets/time.svg'
import deliverys from '../../../assets/deliverys.svg'
import production from '../../../assets/production.svg'
import { useTranslation } from 'react-i18next'

const Section2 = () => {
	const {t, i18n} = useTranslation()
  return (
		<div className={styles.section2}>
			<h3>{t("Покупайте с выгодой!")}</h3>
			<div className={styles.block_box}>
				<div className={styles.boxes}>
					<div className={styles.box}>
						<img src={profit} alt='' />
						<div className={styles.box_text}>
							<h4>{t("Лучшая цена")}</h4>
							<p>
								{t("Предлагаем близкие к оптовым цены, которые дают возможность приобретать мебель дешевле, чем в розничных салонах и шоу-румах.")}
							</p>
						</div>
					</div>

					<div className={styles.box}>
						<img src={time} alt='' />
						<div className={styles.box_text}>
							<h4>{t("Экономие времени")}</h4>
							<p>
								{t("Не нашлиоптимальнывариант нет времени на поиски Оставьтеонлайн-заявку скритериями, и мы предложимвам несколькодостойных образцов.")}
							</p>
						</div>
					</div>
				</div>

				<div className={styles.boxes2}>
					<div className={styles.box2}>
						<img src={deliverys} alt='' />
						<div className={styles.box2_text}>
							<h4>{t("Прямые поставки")}</h4>
							<p>
								{t("С ведущих мебельных фабрик уменьшают срок выполнения вашего заказа, даже если речь идет об изготовлении предметов по индивидуальному проекту.")}
							</p>
						</div>
					</div>
					<div className={styles.box2}>
						<img src={production} alt='' />
						<div className={styles.box2_text}>
							<h4>{t("Изготовление на заказ")}</h4>
							<p>
								{t("Принимаем заявки на изготовление мебели по персональномудизайн-проекту от покупателей из любой точки России. Просим бытьготовыми к авансированной оплате персональных заказов.")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section2