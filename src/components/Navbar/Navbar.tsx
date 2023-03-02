/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import { FcHome, FcEngineering, FcGraduationCap, FcAbout, FcEditImage } from 'react-icons/fc'
import cn from 'classnames'

const links = [
  { link: '/home', icon: FcHome },
  { link: '/skills', icon: FcEngineering },
  { link: '/education', icon: FcGraduationCap },
  { link: '/projects', icon: FcAbout },
  { link: '/message', icon: FcEditImage },
]

export const Navbar = () => {

  const [active] = useState('/home')

  return (
    <div className={styles.navigation}>
      <ul className={styles.container}>
        {links.map(link => (
          <li className={cn(styles.item, {
            [styles.active]: link.link === active
          })}>
            <a href={link.link}>{<link.icon className={styles.icon} />}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
