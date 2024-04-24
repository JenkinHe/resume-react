import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex flex-row'>
      <h3>My Resume React</h3>
      <ul className='flex flex-row'>
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/techinical-skills'}>
          <li>Technical Skills</li>
        </Link>
        <Link to={'/soft-skills'}>
          <li>Soft Skills</li>
        </Link>
        <Link to={'/education'}>
          <li>Education</li>
        </Link>
        <Link to={'/work-history'}>
          <li>Work History</li>
        </Link>
        <Link to={'/hobbies'}>
          <li>Hobbies</li>
        </Link>
      </ul>
    </div>
  )
}
