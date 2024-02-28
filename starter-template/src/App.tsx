import { Route, Routes, useRoutes } from 'react-router-dom'

// components
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import Staff from 'pages/Staff'
import StaffItem from 'components/StaffItem'
import AddStaff from 'components/AddStaff'
import StaffList from 'components/StaffList'
import NotFound from 'pages/NotFound'

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/staff/*',
      element: <Staff />
    },
    {
      path: '/staff/profile/:id',
      element: <StaffItem />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <div className='App'>
      <MainLayout>
        {/* c1: Dung = hook */}
        {elements}

        {/* c2: Dung = jsx */}
        {/* <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff/*' element={<Staff />} />
          <Route path='/staff/profile/:id' element={<StaffItem />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}
      </MainLayout>
    </div>
  )
}

export default App
