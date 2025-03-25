'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import styles from './styles.module.css'

const contactSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  message: z.string().min(1, 'メッセージを入力してください'),
})
type ContactFormData = z.infer<typeof contactSchema>

export default function ContactFrom() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const [success, setSuccess] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    setSuccess(false)
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setSuccess(true)
    } else {
      alert('送信に失敗しました。')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor='name'>Name</label>
      <input className={styles.textarea} id='name' {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}

      <label className={styles.label} htmlFor='email'>
        Email:
      </label>
      <input
        className={styles.textarea}
        id='email'
        type='email'
        {...register('email')}
      ></input>
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor='message'>Message:</label>
      <textarea
        className={styles.textarea}
        id='message'
        rows={5}
        {...register('message')}
      />
      {errors.message && <p>{errors.message.message}</p>}

      <button className={styles.button} type='submit' disabled={isSubmitting}>
        {isSubmitting ? '送信中...' : ''}
        Send
      </button>

      {success && <p>送信しました!</p>}
    </form>
  )
}
