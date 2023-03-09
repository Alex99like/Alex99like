import React, { forwardRef } from 'react'
import { IArea } from '../props.type'
import styles from './Area.module.scss'

export const Area = forwardRef<HTMLTextAreaElement, IArea>(({
  placeholder, style, error, getValue, ...rest
}, ref) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Additional Information</h3>
      <textarea 
        ref={ref}
        className={styles.textarea}
        {...rest} 
      />
    </div>
  )
})