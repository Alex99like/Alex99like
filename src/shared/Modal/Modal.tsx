import React, { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './Modal.module.scss'
import { useSelectorAppContextProvider } from '../../providers/EducationProvider'

interface ModalProp {
  closeModal: (value: 'close' | 'open') => void
}

export const Modal: FC<ModalProp> = ({ closeModal }) => {
  const { item } = useSelectorAppContextProvider()

  return (
    <motion.div className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => closeModal('close')}
      exit={{ opacity: 0 }}
      //transition={{ duration: 0.3 }}
    >
      <motion.div className={styles.modal}
        initial={{ scale: 0, y: 300 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0, y: -900 }}
        transition={{  type: 'spring', stiffness: 100 }}
        onClick={(e) => {e.stopPropagation()}}
      >
        {item && <img src={item.modal.image} alt=''/>}
      </motion.div>
    </motion.div>
  )
}
