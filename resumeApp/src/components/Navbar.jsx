import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex flex-col text-center bg-gray-100'>
      <Link to={'/'}>
      <h3 className='text-4xl text-yellow-500 font-bold'>My Resume React</h3>
        </Link>
      <ul className='flex flex-row mx-auto py-3'>
        <Link to={'/'}>
          <li className='mx-4 inline-block bg-red-600 hover:bg-red-400 text-white rounded-full px-3 py-1 text-2xl font-sans font-open-sans text-center'>Home</li>
        </Link>
        <Link to={'/technical-skills'}>
          <li className='mx-4 inline-block bg-red-600 hover:bg-red-400 text-white rounded-full px-3 py-1 text-2xl font-sans font-open-sans text-center'>Technical Skills</li>
        </Link>
        <Link to={'/soft-skills'}>
          <li className='mx-4 inline-block bg-red-600 hover:bg-red-400 text-white rounded-full px-3 py-1 text-2xl font-sans font-open-sans text-center'>Soft Skills</li>
        </Link>
        <Link to={'/education'}>
          <li className='mx-4 inline-block bg-red-600 hover:bg-red-400 text-white rounded-full px-3 py-1 text-2xl font-sans font-open-sans text-center'>Education</li>
        </Link>
        <Link to={'/work-history'}>
          <li className='mx-4 inline-block bg-red-600 hover:bg-red-400 text-white rounded-full px-3 py-1 text-2xl font-sans font-open-sans text-center'>Work History</li>
        </Link>
        <Link to={'/hobbies'}>
          <li className='mx-4 inline-block bg-red-600 hover:bg-red-400 text-white rounded-full px-3 py-1 text-2xl font-sans font-open-sans text-center'>Hobbies</li>
        </Link>
      </ul>
    </div>
  )
}
