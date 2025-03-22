import instaGo from '../assets/projects_screenshot/instago-screenshot.webp'
import snapTalk from '../assets/projects_screenshot/snaptalk-screenshot.webp'
import movieSpot from '../assets/projects_screenshot/moviespot-screenshot.webp'
import icon_react from '../assets/icons/react.svg'
import icon_node from '../assets/icons/nodejs.svg'
import icon_express from '../assets/icons/expressjs.svg'
import icon_postgres from '../assets/icons/postgresql.svg'
import icon_prisma from '../assets/icons/prisma.svg'
import icon_socketio from '../assets/icons/socketio.svg'
import icon_typescript from '../assets/icons/typescript.svg'
import icon_i18next from '../assets/icons/i18next.svg'
import {Github, Link, CodeXml} from 'lucide-react';
import styles from '../styles/projects.module.scss'
import { useTranslation } from 'react-i18next'

const STACK = {
    REACT: {
      name: 'React.js',
      icon: icon_react,
      color: 'rgba(0, 51, 94, 0.85)'
    },
    NODE: {
      name: 'Node.js',
      icon: icon_node,
      color: 'rgba(0, 56, 12, 0.85)'
    },
    EXPRESS: {
      name: 'Express.js',
      icon: icon_express,
      color: 'rgba(179, 95, 0, 0.85)'
    },
    POSTGRES: {
      name: 'PostgreSQL',
      icon: icon_postgres,
      color: 'rgba(44, 103, 180, 0.85)'
    },
    PRISMA: {
      name: 'Prisma ORM',
      icon: icon_prisma,
      color: 'rgba(10, 10, 10, 0.85)'
    },
    SOCKETIO: {
      name: 'Socket.io',
      icon: icon_socketio,
      color: 'rgba(78, 78, 78, 0.85)'
    },
    TYPESCRIPT: {
      name: 'TypeScript',
      icon: icon_typescript,
      color: 'rgba(0, 44, 109, 0.85)'
    },
    I18NEXT: {
      name: 'i18next',
      icon: icon_i18next,
      color: 'rgba(0, 109, 64, 0.85)'
    }
  };
  
  

function Projects() {
  const { t } = useTranslation();

  const PROJECTS = [
    {
      title: t('instago_title'),
      description: t('instago_description'),
      stack: [STACK.REACT, STACK.NODE, STACK.EXPRESS, STACK.POSTGRES, STACK.PRISMA],
      photo: instaGo,
      code: 'https://github.com/Hrid1402/Social-Media',
      preview: 'https://instago-app.netlify.app/'
    },
    {
      title: t("snapTalk_title"),
      description: t("snapTalk_description"),
      stack: [STACK.REACT, STACK.NODE, STACK.EXPRESS, STACK.SOCKETIO,STACK.POSTGRES, STACK.PRISMA],
      photo: snapTalk,
      code: 'https://github.com/Hrid1402/Messaging-App',
      preview: 'https://snaptalk-app.netlify.app/'
    },
    {
      title: t("movieSpot_title"),
      description: t('movieSpot_description'),
      stack: [STACK.REACT, STACK.TYPESCRIPT, STACK.I18NEXT],
      photo: movieSpot,
      code: 'https://github.com/Hrid1402/Movie-Explorer',
      preview: 'https://app-moviespot.netlify.app/'
    }
  ];


  return (
    <div className={styles.projects} id='projects'>
        <h1><CodeXml/>{t("Projects")}</h1>
        <div className={styles['projects-container']}>
          {
            PROJECTS.map((p,i)=>{
              return(
                <div key={i} className={styles.project}>
                  <div className={styles.left}>
                    <img src={p.photo} alt="project screenshot" />
                  </div>
                  <div className={styles.right}>
                    <div>
                      <h2 className={styles.project_title}>{p.title}</h2>
                      <div className={styles['stack-container']}>
                        {
                          p.stack.map((element, i)=>{
                            return(
                              <div className={styles['stack-element']} style={{backgroundColor: element.color}} key={i}><img src={element.icon} alt={element.name}/>{element.name}</div>
                            )
                          })
                        }
                      </div>
                      <p className={styles.description}>{p.description}</p>
                    </div>
                    <div className={styles['project-buttons']}>
                      <a href={p.code} target="_blank"><Github size={'25px'} strokeWidth={1}/>{t("code")}</a>
                      <a href={p.preview} target="_blank"><Link />{t("preview")}</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default Projects