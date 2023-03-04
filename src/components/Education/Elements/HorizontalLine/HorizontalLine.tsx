import { motion } from 'framer-motion'
import styles from './HorizontalLine.module.scss'
import React, { FC } from 'react'
import cn from 'classnames'

interface LineProps {
  top: string;
  width: string;
  delay: number
  direction: 'left' | 'right'
}

export const HorizontalLine: FC<LineProps> = ({ top, width, delay, direction }) => {
  return (
    <div className={styles[`${direction}-line`]} style={{ top: top }}>
        <motion.span className={styles.start} 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay, type: 'spring' }}
        />
        <motion.span className={styles.line}
          initial={{ width: 0 }}
          animate={{ width: width }}
          transition={{ duration: 2, delay: delay + 0.8 }}
        />
        <motion.span className={styles.end} 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay, type: 'spring' }}
        />
      </div>
  )
}
