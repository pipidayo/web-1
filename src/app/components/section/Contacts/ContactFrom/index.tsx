import React from 'react'

type FromProps = {
  name: string
  email: string
  message: string
}
export default function ContactFrom() {
  return (
    <div>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' />
    </div>
  )
}
