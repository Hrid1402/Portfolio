import React from 'react'
import icon_react from '../assets/icons/react.svg'
import icon_node from '../assets/icons/nodejs.svg'
import icon_express from '../assets/icons/expressjs_dark.svg'
import icon_prisma from '../assets/icons/prisma.svg'
import icon_css_old from '../assets/icons/css_old.svg'
import icon_html from '../assets/icons/html5.svg'
import icon_javascript from '../assets/icons/javascript.svg'
import icon_postgres from '../assets/icons/postgresql.svg'
import icon_github from '../assets/icons/github-light.svg'
import icon_git from '../assets/icons/git.svg'
import icon_jwt from '../assets/icons/jwt.svg'
import icon_vite from '../assets/icons/vitejs.svg'
import { useTranslation } from 'react-i18next'
import styles from '../styles/TechStack.module.scss'


    const stack = [
        {img: icon_html, name: 'HTML'},
        {img: icon_css_old, name: 'CSS'},
        {img: icon_javascript, name: 'JavaScript'},
        {img: icon_react, name: 'React.js'},
        {img: icon_node, name: 'Node.js'},
        {img: icon_express, name: 'Express.js'},
        {img: icon_jwt, name: 'JWT'},
        {img: icon_postgres, name: 'PostgreSQL'},
        {img: icon_prisma, name: 'Prisma ORM'},
        {img: icon_vite, name: 'Vite'},
        {img: icon_github, name: 'GitHub'},
        {img: icon_git, name: 'Git'}
    ]
function TechStack() {
    const { t } = useTranslation();
  return (
    <div className={styles.tech}>
        <h1>{t("Tech Stack")}</h1>
        <div className={styles['tech-container']}>
           <div className={styles.carousel}>
           {
                stack.map((s,i)=>{
                    return (
                        <div key={i} className={styles.element}>
                            <img src={s.img} alt={s.name}/>
                            <p>{s.name}</p>
                        </div>
                    )
                })
            }

            {
                stack.map((s,i)=>{
                    return (
                        <div key={i} className={styles.element}>
                            <img src={s.img} alt={s.name}/>
                            <p>{s.name}</p>
                        </div>
                    )
                })
            }
           </div>
        </div>
    </div>
  )
}

export default TechStack