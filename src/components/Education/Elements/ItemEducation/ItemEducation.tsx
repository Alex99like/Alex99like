import React, { FC } from 'react'
import styles from './ItemEducation.module.scss'
import { motion } from 'framer-motion'
import cn from 'classnames'

interface ItemEducationProps {
    delay: number
    item: {
      name: string
      time: number
      class: string
    },
    direction: 'left' | 'right'
}

export const ItemEducation: FC<ItemEducationProps> = ({ delay, item, direction }) => {
  return (
    <motion.div className={cn(styles.container, styles[direction], styles[item.class])}
      initial={{ x: direction === 'left' ? 50 : -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: delay + 2.5, type: 'spring' }}
    >
      <span className={styles.date}>{item.time} MONTH</span>
      <motion.h3 className={styles.title}
        initial={false}
        animate={{ rotate: direction === 'left' ? '-10deg' : '10deg' }}
      >
        {item.name.split(':').length === 1 ? item.name : <>{item.name.split(':')[0]}<span className={styles['name-course']}>{item.name.split(':')[1]}</span></>}
      </motion.h3>
    </motion.div>
  )
}
