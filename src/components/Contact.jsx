import { Mail, Github, Linkedin, FileUser } from 'lucide-react';
import { useTranslation } from 'react-i18next'
import styles from '../styles/contact.module.scss'


const Icon_X = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 256">
            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
                <g transform="scale(5.12,5.12)">
                    <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                </g>
            </g>
        </svg>
    );
};


function Contact() {
    const { t } = useTranslation();
  return (
    <div id='contact' className={styles.container}>
        <h1>{t('Contact')}</h1>
        <p className={styles.subtitle}>{t('contact_sub')}</p>
        <div className={styles['contacts-container']}>
            <div className={styles.email}>
                <a href='mailto:hridsiguenas@gmail.com' aria-label="Email" className={styles.icon}>
                    <Mail/>
                </a>
                <div className={styles['email-data']}>
                    <h2>Email</h2>
                    <p><span>hridsiguenas</span><span>@gmail.com</span></p>
                </div>
            </div>
            
            <div className={styles.email}>
                <a href={`CV_Hrid_${t("language")}.pdf`} target='_blank' aria-label="CV" className={styles.icon}>
                    <FileUser />
                </a>

                <div className={styles['email-data']}>
                    <h2>CV</h2>
                    <p>{t('download')}</p>
                </div>
            </div>

            <div className={styles.email}>
                <a href='https://github.com/Hrid1402' target='_blank' aria-label="Github" className={styles.icon}>
                    <Github />
                </a>

                <div className={styles['email-data']}>
                    <h2>GitHub</h2>
                    <p>Hrid1402</p>
                </div>
            </div>

            <div className={styles.email}>
                <a href='https://www.linkedin.com/in/hrid-sigue%C3%B1as-846109261/' aria-label="LinkedIn" target='_blank' className={styles.icon}>
                    <Linkedin strokeWidth={1.3} />
                </a>

                <div className={styles['email-data']}>
                    <h2>LinkedIn</h2>
                    <p>Hrid Sigueñas</p>
                </div>
            </div>

            <div className={styles.email}>
                <a href='https://x.com/HridSiguenas' aria-label="x.com" target='_blank' className={styles.icon}> 
                    <Icon_X/>
                </a>

                <div className={styles['email-data']}>
                    <h2>𝕏</h2>
                    <p>Hrid Sigueñas</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact