
import { useTranslation } from 'react-i18next';
import styles from '../styles/aboutMe.module.scss';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
        <h1>{t("About me")}</h1>
        <p dangerouslySetInnerHTML={{ __html: t('about') }} />
    </div>
  )
}

export default AboutMe