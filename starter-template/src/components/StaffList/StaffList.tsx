import React from 'react'
import { Link } from 'react-router-dom'

export default function StaffList() {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/staff/profile/1'} className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
            Staff 1
          </Link>
        </li>
        <li>
          <Link to={'/staff/profile/2'} className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
            Staff 2
          </Link>
        </li>
        <li>
          <Link to={'/staff/profile/3'} className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
            Staff 3
          </Link>
        </li>
      </ul>
    </div>
  )
}
