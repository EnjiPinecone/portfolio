import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div className='flex justify-center items-center gap-6 text-gray-600'>
      <Link href='/'>About</Link>
      <Link href='/'>Work</Link>
      <Link href='/'>Testimonials</Link>
      <Link href='/'>Contact</Link>
    </div>
  )
}
