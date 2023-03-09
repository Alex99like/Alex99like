import React, { forwardRef, useState } from 'react'
import { IField } from '../props.type'
import styles from './Field.module.scss'
import cn from 'classnames'

export const Field = forwardRef<HTMLInputElement, IField>(({
  placeholder, Icon, style, error, getValue, type, ...rest
}, ref) => {
  const [onFocus, setOnFocus] = useState<boolean>(false)

  const handlerFocus = () => {
    if (getValue) {
      if (getValue.get(getValue.name).trim().length === 0) setOnFocus(false);
      else setOnFocus(true);
    }
  };

  return (
    <div className={styles.container} style={style}>
      <label className={styles.label} onChange={handlerFocus} onBlur={handlerFocus} onFocus={() => setOnFocus(true)}>
        <span className={cn({
          [styles.active]: onFocus
        })}>
          {placeholder}
        </span>
        <Icon className={styles.icon} />
        <input 
          className={styles.input}   
          autoComplete={'off'}
          ref={ref} 
          type={type} 
          {...rest} 
        />
      </label>
      {error && (
        <div className={styles.error}>
          {error.message}
        </div>
      )}
    </div> 
  )
})
