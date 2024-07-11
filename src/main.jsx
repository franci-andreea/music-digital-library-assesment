import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.scss'
import AlbumsPage from './pages/AlbumsPage.jsx'
import ArtistsPage from './pages/ArtistsPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/albums',
    element: <AlbumsPage />,
  },

  {
    path: '/artists',
    element: <ArtistsPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
