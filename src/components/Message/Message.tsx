import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FcFaq } from 'react-icons/fc'
import { SiGmail } from 'react-icons/si'
import { AiTwotonePhone } from 'react-icons/ai'
import styles from './Message.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Field } from './forms/Field/Field'

import { BsMessenger } from 'react-icons/bs'
import { RiAccountPinBoxFill } from 'react-icons/ri'
import { BsBuilding } from 'react-icons/bs'
import { Area } from './forms/Area/Area'

export interface IMessageForm {
  name: string
  nameCompany: string
  contact: string
  phone: string
  description: string
}

export const Message = () => {

  const { 
    formState: { errors }, 
    register,
    getValues,
    handleSubmit
  } = useForm<IMessageForm>()

  const onSubmit: SubmitHandler<IMessageForm> = (data) => {
    console.log(data)
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3 className={styles.this}>This is my, </h3>
        <h3 className={styles.cont}>CONTACTS <FcFaq className={styles.icon} /></h3>
      </div>
      <div className={styles.wrap}>
        <ul className={styles.links}>
          <div className={styles.info}>
            <h3 className={styles.title}>You can contact me </h3>
            <h3 className={styles.now}>RIGHT NOW!</h3>
          </div>
          <li className={styles.link}>
            <a href='/'><FaTelegram className={styles.icon} />
              <span>Telegram</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href='/'><FaLinkedin className={styles.icon} />
              <span>Linkedin</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href='/'><FaFacebookSquare className={styles.icon} />
              <span>FaceBook</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href='/'><SiGmail className={styles.icon} />
             <span>GMAIL</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href='/'><AiTwotonePhone className={styles.icon} />
              <span>Phone</span>
            </a>
          </li>
        </ul>
        <div className={styles['form-container']}>
          <div className={styles.info}>
            <h1 className={styles.title}>Send Message</h1>
            <p className={styles.message}>Send me a message and I will contact you myself)</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles['one-line']}>
              <Field 
                {...register('name', {
                  required: 'Name is required',
                  pattern: {
                    value: /dw/,
                    message: 'Please enter a valid name',
                  },
                })}
                Icon={RiAccountPinBoxFill}
                placeholder="Your Name"
                error={errors.name}
                getValue={{ get: getValues, name: 'name' }}
              />
              <Field 
                {...register('phone', {
                  required: 'Name is required',
                  pattern: {
                    value: /dw/,
                    message: 'Your Number Phone',
                  },
                })}
                Icon={AiTwotonePhone}
                placeholder="Your Number Phone"
                error={errors.name}
                getValue={{ get: getValues, name: 'phone' }}
              />
            </div>

            <Field 
                {...register('contact', {
                  required: 'Name is required',
                  pattern: {
                    value: /dw/,
                    message: 'Your Number Phone',
                  },
                })}
                Icon={BsMessenger}
                placeholder="Your Account Messenger"
                error={errors.name}
                getValue={{ get: getValues, name: 'contact' }}
              />

              <Field 
                {...register('nameCompany', {
                  required: 'Name is required',
                  pattern: {
                    value: /dw/,
                    message: 'Your Number Phone',
                  },
                })}
                Icon={BsBuilding}
                placeholder="Your Company Name"
                error={errors.name}
                getValue={{ get: getValues, name: 'nameCompany' }}
              />
              <Area 
                {...register('description', {
                  required: 'Name is required',
                  pattern: {
                    value: /dw/,
                    message: 'Your Number Phone',
                  },
                })}
                placeholder="Your Number Phone"
                error={errors.name}
                getValue={{ get: getValues, name: 'description' }}
              />
              <div className={styles.buttons}>
                <button className={styles.reset}>RESET</button>
                <button className={styles.send}>SEND</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}
