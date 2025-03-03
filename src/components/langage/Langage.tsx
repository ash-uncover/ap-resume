import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'
import { ResumeTitle } from '../common/ResumeTitle'

export const Langage = () => {

  // Hooks //

  const langages = useSelector((state: RootState) => state.data.data.langages)

  // Rendering //

  function renderLang(langEntry: ModelResumeLangage) {
    return (
      <li
        key={langEntry.lang}
        className='resume-lang-entry'
      >
        {langEntry.lang}
        {langEntry.skill}
      </li>
    )
  }

  return (
    <section className='resume-lang'>
      <ResumeTitle
        className='resume-lang-title'
        text='Languages'
      />
      <ul className='resume-lang-list'>
        {(langages || []).map(renderLang)}
      </ul>
    </section>
  )
}
