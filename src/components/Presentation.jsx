import styles from '../styles/presentation.module.scss'
import { Github, Linkedin, FileUser} from 'lucide-react';
import codingGraphic from '../assets/coding.svg'
import { useTranslation } from 'react-i18next'


function Presentation() {
  const { t } = useTranslation();
  return (
    <div className={styles['first-part']}>
        <div className={styles.presentation}>
          <h3>{t("hi")}</h3>
          <h1>{t("I am")} <span>Hrid</span></h1>
          <h2>{t("I am a")}</h2>
          <div className={styles.links}>
            <a href="https://github.com/Hrid1402" target="_blank" aria-label="Github"><Github size={'25px'} strokeWidth={1}/></a>
            <a href="https://www.linkedin.com/in/hrid-sigue%C3%B1as-846109261/" target="_blank" aria-label="LinkedIn"><Linkedin size={'25px'} strokeWidth={1}/></a>
            <a href={`CV_Hrid_${t("language")}.pdf`} target='_blank' aria-label="CV"><FileUser size={'25px'} strokeWidth={1}/></a>
          </div>
        </div>
        <img src={codingGraphic} alt=''/>
        <div className={styles.links_bottom}>
            <a href="https://github.com/Hrid1402" target="_blank" aria-label="Github"><Github size={'25px'} strokeWidth={1}/></a>
            <a href="https://www.linkedin.com/in/hrid-sigue%C3%B1as-846109261/" aria-label="LinkedIn" target="_blank"><Linkedin size={'25px'} strokeWidth={1}/></a>
            <a href={`CV_Hrid_${t("language")}.pdf`} target='_blank' aria-label="CV"><FileUser size={'25px'} strokeWidth={1}/></a>
          </div>
    </div>
  )
}

export default Presentation