import React from 'react'

import { RootState } from 'src/store'
import { useDispatch, useSelector } from 'react-redux'

import { Contact } from './contact/Contact'
import { Education } from './education/Education'
import { Experience } from './experience/Experience'
import { Expertise } from './expertise/Expertise'
import { General } from './general/General'
import { Hobby } from './hobby/Hobby'
import { Langage } from './langage/Langage'

import { update } from '../store/data.slice'

import './App.css'
import '../templates/Template1.css'
import '../templates/Template2.css'
import { Picture } from './picture/Picture'

export const App = () => {

  // #region Hooks
  const dispatch = useDispatch()
  const template = useSelector((state: RootState) => state.app.template)
  // #endregion

  // #region Callbacks
  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const raw = e.target.result as string
        const data = JSON.parse(raw)
        dispatch(update(data))
      }
      reader.readAsText(file)
    }
  }
  // #endregion

  // #region Rendering
  const classes = ['app']

  return (
    <div className='app'>
      <header className='app-header'>
        toolbar
        <input onChange={handleFileSelected} type='file'></input>
      </header>
      <main className='app-main'>
        <div className='resume'>
          <div className='resume-side'>
            <div className='resume-side-content'>
              <Picture />
              <Contact />
              <Expertise />
              <Education />
              <Langage />
            </div>
          </div>
          <div className='resume-main'>
            <div className='resume-main-content'>
              <General />
              <Experience />
              <Hobby />
            </div>
          </div>
        </div>
      </main>
      <footer className='app-footer'>
        © aSH-uncover 2025
      </footer>
    </div>
  )
  // #endregion
}
