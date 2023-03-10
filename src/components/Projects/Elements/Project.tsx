import React, { FC, useEffect, useRef } from 'react'
import { IProject } from '../data'
import styles from './Project.module.scss'
import { useTransform, MotionValue, useScroll, motion, useMotionValueEvent } from 'framer-motion'

export interface IProjectProps {
  item: IProject
  idx: number
}

export const Project: FC<IProjectProps> = ({ item, idx }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref.current!.offsetTop)
  }, [])

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ amount: 0.5 }}
      >
        <img className={styles.img} src={item.mainImage} alt="A London skyscraper" />
      </motion.div>
      {/* <motion.h2 style={{ y }}>{`#00${idx + 1}`}</motion.h2> */}
    </section>
  )
}
