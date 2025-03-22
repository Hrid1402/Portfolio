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
import icon_axios from '../assets/icons/axios.svg'
import icon_passport from '../assets/icons/passport.svg'
import { useTranslation } from 'react-i18next'
import styles from '../styles/TechStack.module.scss'
import { MonitorSmartphone, Server, Wrench   } from 'lucide-react';


const frontend = [
    {img: icon_html, name: 'HTML'},
    {img: icon_css_old, name: 'CSS'},
    {img: icon_javascript, name: 'JavaScript'},
    {img: icon_react, name: 'React.js'},
    {img: icon_axios, name: 'Axios'},
    {img: icon_vite, name: 'Vite'}
];

const backend = [
    {img: icon_node, name: 'Node.js'},
    {img: icon_express, name: 'Express.js'},
    {img: icon_passport, name: 'Passport.js'},
    {img: icon_jwt, name: 'JWT'},
    {img: icon_postgres, name: 'PostgreSQL'},
    {img: icon_prisma, name: 'Prisma ORM'}
];

const devTools = [
    {img: icon_github, name: 'GitHub'},
    {img: icon_git, name: 'Git'}
];


function TechStack() {
    const { t } = useTranslation();
  return (
    <div id='tech-stack' className={styles.tech}>
        <h1>{t("Tech Stack")}</h1>
        <div className={styles['tech-container']}>
            <div className={styles['tech-stack']}>
                <div className={styles['tech-stack-title']}>
                    <MonitorSmartphone/>
                    <h2>{t("Frontend")}</h2>
                </div>
                <div className={styles['tech-stack-container']}>
                    {frontend.map((tech, index) => (
                        <div key={index} className={styles['tech-item']}>
                            <img src={tech.img} alt={tech.name}/>
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles['tech-stack']}>
                <div className={styles['tech-stack-title']}>
                    <Server/>
                    <h2>{t("Backend")}</h2>
                </div>
                <div className={styles['tech-stack-container']}>
                    {backend.map((tech, index) => (
                        <div key={index} className={styles['tech-item']}>
                            <img src={tech.img} alt={tech.name}/>
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles['tech-stack']}>
                <div className={styles['tech-stack-title']}>
                    <Wrench/>
                    <h2>{t("Dev Tools")}</h2>
                </div>
                <div className={styles['tech-stack-container']}>
                    {devTools.map((tech, index) => (
                        <div key={index} className={styles['tech-item']}>
                            <img src={tech.img} alt={tech.name}/>
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default TechStack