import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FcEngineering, FcGraduationCap } from 'react-icons/fc'
import styles from './Education.module.scss'
import { VerticalEducation } from './Elements/VerticalEducation'
import { Experiences } from './Elements/Experiences'
import { SwitchButtons } from './Elements/Buttons/SwitchButtons'


export const Education = () => {
  const [mobile, setMobile] = useState(false)
  const [switchBtn, setSwitchBtn] = useState<'education' | 'experience'>('education')

  const handlerSwitch = (value: 'education' | 'experience') => {
    setSwitchBtn(value)
  }
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
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
    <motion.section className={styles.container}>
      <div className={styles.title}>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
        >Education <FcGraduationCap className={styles.icon} /></motion.h2>
        <motion.span className={styles.and}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
        >AND</motion.span>
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
        >Experiences <FcEngineering className={styles.icon} /></motion.h2>
      </div>
      <div className={styles.wrapper}>
        {mobile ? (
          <>
            <VerticalEducation />
            <Experiences />
          </>
        ) : (
          <>
            {switchBtn === 'education' && <VerticalEducation />}
            {switchBtn === 'experience' && <Experiences />}
            <SwitchButtons handler={handlerSwitch} switchBtn={switchBtn} />
          </>
        )}
      </div>
    </motion.section>
  )
}
