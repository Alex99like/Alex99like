import { useState, useEffect } from 'react'
import { calcDate } from '../../../utils/calcData'
import { motion } from 'framer-motion'
import styles from './VerticalEducation.module.scss'
import { HorizontalLine } from './HorizontalLine/HorizontalLine'

const startDate = '03-22-2021'

export const VerticalEducation = () => {
  const [date, setDate] = useState(calcDate(startDate))
 
  useEffect(() => {
    if (date && calcDate(date)) {
    setTimeout(() => {
      setDate(calcDate(date))
    }, 40)
  }
  }, [date])

  return (
    <div className={styles.container}>
      <HorizontalLine top='17%' width='76%' delay={1.8} direction={'left'} />
      <HorizontalLine top='32%' width='76%' delay={2.1} direction={'right'} />
      <HorizontalLine top='48%' width='68%' delay={2.8} direction={'left'} />
      <HorizontalLine top='64%' width='68%' delay={3.5} direction={'right'} />
      <HorizontalLine top='80%' width='76%' delay={4.1} direction={'left'} />
      <div className={styles.mainLine}>
        <span className={styles.start}>{startDate.replaceAll('-', '.')}</span>
        <motion.span className={styles.line}
          initial={{ height: 0 }}
          animate={{ height: '90%' }}
          transition={{ duration: 5 }}
        >
        </motion.span>
        <span className={styles.end}>{date?.replaceAll('-', '.')}</span>
      </div>
    </div>
  )
}