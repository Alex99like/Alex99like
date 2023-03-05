import { useState, useEffect } from 'react'
import { calcDate } from '../../../utils/calcData'
import { motion } from 'framer-motion'
import styles from './VerticalEducation.module.scss'
import { HorizontalLine } from './HorizontalLine/HorizontalLine'
import { ItemEducation } from './ItemEducation/ItemEducation'
import { education } from '../../../data/education'

const startDate = '03-22-2021'

const setting = {
  one: { delay: 1.8, width: 76, top: 17, relative: { count: 130, left: 73 } },
  two: { delay: 2.1, width: 55, top: 32, relative: { count: 100, left: 102 } },
  three: { delay: 2.8, width: 76, top: 48, relative: { count: 130, left: 73 } },
  four: { delay: 3.5, width: 65, top: 64, relative: { count: 120, left: 80 } },
  five: { delay: 4.1, width: 65, top: 79, relative: { count: 120, left: 82 } },
}

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
      <HorizontalLine relative={setting.one.relative} top={`${setting.one.top}%`} width={`${setting.one.width}%`} delay={setting.one.delay} direction={'left'}>
        <ItemEducation delay={setting.one.delay} item={education.JavaRush} direction='left' />
      </HorizontalLine>
      <HorizontalLine relative={setting.two.relative} top={`${setting.two.top}%`} width={`${setting.two.width}%`} delay={setting.two.delay} direction={'right'}>
        <ItemEducation delay={setting.two.delay} item={education.rssS1} direction='right' />
      </HorizontalLine>
      <HorizontalLine relative={setting.three.relative} top={`${setting.three.top}%`} width={`${setting.three.width}%`} delay={setting.three.delay} direction={'left'}>
        <ItemEducation delay={setting.three.delay} item={education.rssS2} direction='left' />
      </HorizontalLine>
      <HorizontalLine relative={setting.four.relative} top={`${setting.four.top}%`} width={`${setting.four.width}%`} delay={setting.four.delay} direction={'right'}>
        <ItemEducation delay={setting.four.delay} item={education.rssReact} direction='right' />
      </HorizontalLine>
      <HorizontalLine relative={setting.five.relative} top={`${setting.five.top}%`} width={`${setting.five.width}%`} delay={setting.five.delay} direction={'left'}>
        <ItemEducation delay={setting.five.delay} item={education.rssNode} direction='left' />
      </HorizontalLine>
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