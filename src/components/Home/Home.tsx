import React from 'react'
import styles from './Home.module.scss'
import Profile from '../../assets/img/profile.jpg'
import { GITHUB_LINK, LINKED_LINK } from '../../constants/links'
import LinkedImage from '../../assets/img/linkedin.svg'
import GithubImage from '../../assets/img/github.svg'

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles['name-container']}>
        <div className={styles.profile}>
          <h2 className={styles.hello}><span className={styles.emoji}>Hi👋, I`am </span> FULL-STACK</h2>
          <h2 className={styles.prof}>DEVELOPER</h2>
          <div className={styles.tags}>
            <span className={styles.tag}>TS</span>
            <span className={styles.tag}>JS</span>
          </div>
        </div>
        <div className={styles['links-container']}>
          <a href={LINKED_LINK} className={styles.link}>
            <img src={LinkedImage} className={styles.image} alt='' />
            Linkedin
          </a>
          <a href={GITHUB_LINK} className={styles.link}>
            <img src={GithubImage} className={styles.image} alt='' />
            GitHub
          </a>
        </div>
        <div className={styles.name}>  
          <h1 className={styles['first-name']}>Aleksander</h1>
          <h1 className={styles['last-name']}>Aleksievich</h1>
        </div> 
      </div>
      <div className={styles['image-container']}>
        <div className={styles['img-container']}>
          <h4 className={`${styles.project} ${styles.tag}`}>
            <span className={styles.span}>19</span> projects
          </h4>
          <h4 className={`${styles.lang} ${styles.tag}`}>
            English <span className={styles.span}>a2</span>
          </h4>
          <h4 className={`${styles.expires} ${styles.tag}`}>
            <span className={styles.span}>2+ year</span> experience
          </h4>
          <img src={Profile} alt={''} className={styles.img} />
        </div>
      </div>
    </section>
  )
}
