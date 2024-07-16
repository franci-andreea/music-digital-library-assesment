import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.scss'
import AlbumsPage from './pages/albums/AlbumsPage.jsx'
import ArtistsPage from './pages/artists/ArtistsPage.jsx'
import ViewArtistPage from './pages/artists/ViewArtistPage.jsx'
import ViewAlbumPage from './pages/albums/ViewAlbumPage.jsx'

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

  {
    path: '/artists/:artistId',
    element: <ViewArtistPage />,
  },

  {
    path: '/artist/:artistId/albums/:title',
    element: <ViewAlbumPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
