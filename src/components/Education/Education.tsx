import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FcEngineering, FcGraduationCap } from 'react-icons/fc'
import styles from './Education.module.scss'
import { calcDate } from '../../utils/calcData'
import { VerticalEducation } from './Elements/VerticalEducation'

const startDate = '03-22-2021'

export const Education = () => {

  const [date, setDate] = useState(calcDate(startDate))

  useEffect(() => {
    if (date && calcDate(date)) {
    setTimeout(() => {
      setDate(calcDate(date))
    }, 60)
  }
  }, [date])

  return (
    <motion.section className={styles.container}>
      <div className={styles.title}>
        <h2>Education <FcGraduationCap className={styles.icon} /></h2>
        <span className={styles.and}>AND</span>
        <h2>Experiences <FcEngineering className={styles.icon} /></h2>
      </div>
      <div className={styles.wrapper}>
        <VerticalEducation />
        <VerticalEducation />
      </div>
    </motion.section>
  )
}
