import React from 'react'
import styles from './Section3.module.css'
import { useTranslation } from 'react-i18next'

const Section3 = () => {
	const {t, i18n} = useTranslation()
  return (
		<div className={styles.section3}>
			<div className={styles.description}>
				<div className={styles.section3_text}>
					<h2>{t("Самые «вкусные» предложения")}</h2>

					<h3>
						<hr />
					</h3>
					<p>
						{t("Мы делаем всё необходимое, чтобы покупатели получали доступ кактуальным новинкам, которые представляет российский мебельныйрынок. Познакомиться с каждой моделью, сравнить цены на аналоги ивыбрать лучшее вы можете прямо сейчас. Хотите первыми узнавать осамых выгодных предложениях? Тогда подписывайтесь на информационнуюрассылку!")}
					</p>
				</div>

				<div className={styles.section3_text2}>
					<h2>{t("Гарантированное качество")}</h2>

					<h3>
						<hr />
					</h3>
					<p>
						{("Вся продукция сопровождается гарантией производителя. В каталогахпредставлена только сертифицированная мебель. Собственный контролькачества тщательно проверяет каждый образец перед отправкойзаказчику. Покупатели получают необходимые документы – гарантийныйталон и чек.")}
					</p>
				</div>

				<div className={styles.section3_text3}>
					<h2>{t("Впечатляющий ассортимент")}</h2>

					<h3>
						<hr />
					</h3>
					<p>
						{t("Ежедневно мы выбираем для наших каталогов идеальные образцы изтоварной матрицы производителей по всей России. Модные расцветки,экологически безопасные материалы, надежные комплектующие – у нас вынайдете мебель своей мечты!")}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Section3