import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(
      () =>
        navigate('/', {
          state: 'Redirect from Not found'
        }),
      5000
    )
    // Khi co state thi Redirect qua Com nao thi log location ra se co duoc state.
  }, [navigate])

  return <div>NotFound 404 !!!</div>
}
