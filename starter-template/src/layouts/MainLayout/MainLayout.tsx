import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const active = 'bg-gray-300'
  return (
    <div className='grid min-h-screen grid-cols-4'>
      <aside className='col-span-1' aria-label='Sidebar'>
        <div className='h-full overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg'>
          <ul className='space-y-2'>
            <li>
              <NavLink
                to={'/'}
                end
                style={({ isActive }) => ({
                  fontWeight: isActive ? 800 : undefined
                })}
                className={({ isActive }) =>
                  classNames(
                    'flex items-center rounded-lg  p-2 text-base font-normal text-gray-900 hover:bg-gray-300',
                    {
                      'bg-gray-300': isActive
                    }
                  )
                }
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/staff'}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 800 : undefined
                })}
                className={({ isActive }) =>
                  classNames(
                    'flex items-center rounded-lg  p-2 text-base font-normal text-gray-900 hover:bg-gray-300',
                    {
                      'bg-gray-300': isActive
                    }
                  )
                }
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>staff</span>}
              </NavLink>
            </li>
            <li>  
              <NavLink
                to={'/about'}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 800 : undefined
                })}
                className={({ isActive }) => {
                  return classNames(
                    'flex items-center rounded-lg  p-2 text-base font-normal text-gray-900 hover:bg-gray-300',
                    {
                      'bg-gray-300': isActive
                    }
                  )
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>About</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <main className='col-span-3 h-full py-4 px-3'>{children}</main>
    </div>
  )
}
