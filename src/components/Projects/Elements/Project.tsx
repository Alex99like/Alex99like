import React, { FC, useEffect, useState } from 'react'
import { IProject } from '../data'
import styles from './Project.module.scss'
import { motion } from 'framer-motion'
import cn from 'classnames'

export interface IProjectProps {
  item: IProject
  idx: number
}

export const Project: FC<IProjectProps> = ({ item, idx }) => {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setMobile(false)
      } else {
        setMobile(true)
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <section className={styles.section}>
      <motion.div className={styles.container}>
        <motion.div className={styles['container-img']}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ amount: 0.5 }}
        >
          <motion.h3 className={styles.title}
            initial={{ opacity: 0, x: 200, zIndex: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ amount: 0.5 }}
          >{item.title}</motion.h3>
          <motion.h3 className={styles.days}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            viewport={{ amount: 0.5 }}
          >
            {item.time} DAYS
          </motion.h3>
          <motion.img className={styles.img} src={mobile ? item.mainImage : item.mobileImage} alt="" 
           
          />
        </motion.div>
        <motion.fieldset className={styles.tags}
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5, type: 'spring' }}
          viewport={{ amount: 0.5 }}
        >
          <legend>Technologies Used</legend>
          {item.tags.map((tag, idx) => (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.1 , delay: 0.5  + idx / 20 }}
              key={tag} 
              className={cn(styles.tag, styles[tag.toLowerCase().replaceAll(' ', '-')])}>{tag}</motion.span>
          ))}
        </motion.fieldset>
      </motion.div>
    </section>
  )
}
