import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div className='flex justify-center items-center gap-6 text-gray-600 dark:text-white'>
      <Link href='#about'>About</Link>
      <Link href='#work'>Work</Link>
      <Link href='#testimonials'>Testimonials</Link>
      <Link href='#contact'>Contact</Link>
    </div>
  )
}
