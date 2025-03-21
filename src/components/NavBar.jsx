import styles from '../styles/navBar.module.scss'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

function NavBar() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <nav className={styles.nav}>
      <a href='#projects'>{t('Projects')}</a>
      <a href='#about-me'>{t('About me')}</a>
      <a href='mailto:hridsiguenas@gmail.com'>{t('Contact')}</a>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </nav>
  )
}

export default NavBar