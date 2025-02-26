import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

import { Contact } from './Contact'
import { Education } from './Education'
import { Experience } from './Experience'
import { Expertise } from './Expertise'
import { General } from './General'
import { Hobby } from './Hobby'
import { Langage } from './Langage'
import { Social } from './Social'

import './App.css'
import '../templates/Template1.css'
import '../templates/Template2.css'

export const App = () => {

  // Hooks //

  const template = useSelector((state: RootState) => state.app.template)

  // Rendering //

  const classes = ['app']

  return (
    <div className='app'>
      <header className='app-header'>
        toolbar
      </header>
      <main className='app-main'>
        <div className={`resume ${template}`}>
          <General />
          <Contact />
          <Education />
          <Experience />
          <Expertise />
          <Langage />
          <Social />
          <Hobby />
        </div>
      </main>
      <footer className='app-footer'>
        © aSH-uncover 2024
      </footer>
    </div>
  )
}
