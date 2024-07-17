import { useEffect, useState } from 'react'
import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import RecentList from './components/recent_list/RecentList'
import WelcomeMessage from './components/welcome_message/WelcomeMessage'
import axios from 'axios'

function App() {
  return (
    <div>
      <Header />

      <div id='content-wrapper'>
        <WelcomeMessage />

        <div id='artist-section'>
          <RecentList path={'/artists'} />
        </div>

        <div id='album-section'>
          <RecentList path={'/albums'} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
