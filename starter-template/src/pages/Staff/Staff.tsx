import { NavLink, Outlet, Route, Router, Routes } from 'react-router-dom'
import classNames from 'classnames'

// components
import AddStaff from 'components/AddStaff'
import StaffList from 'components/StaffList'

export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff List</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to={'/staff'}
              end
              className={({ isActive }) =>
                classNames('inline-block rounded-t-lg border-b-2 p-4', {
                  'border-blue-600  text-blue-600': isActive,
                  'border-transparent hover:border-gray-300 hover:text-gray-600': !isActive
                })
              }
            >
              Staff List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to={'add'}
              className={({ isActive }) =>
                classNames('inline-block rounded-t-lg border-b-2 p-4', {
                  'border-blue-600  text-blue-600': isActive,
                  'border-transparent hover:border-gray-300 hover:text-gray-600': !isActive
                })
              }
              aria-current='page'
            >
              Add Staff
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route index element={<StaffList />} />
        <Route path='add' element={<AddStaff />} />
      </Routes>
    </div>
  )
}
