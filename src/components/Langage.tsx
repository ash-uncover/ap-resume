import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

export const Langage = () => {

  // Hooks //

  const langages = useSelector((state: RootState) => state.data.langages)

  // Rendering //

  function renderLang(langEntry: ResumeLangage) {
    return (
      <li className='resume-lang-entry'>
        {langEntry.lang}
        {langEntry.skill}
      </li>
    )
  }

  return (
    <section className='resume-lang'>
      <h3 className='resume-lang-title'>
        Langages
      </h3>
      <ul className='resume-lang-list'>
        {langages.map(renderLang)}
      </ul>
    </section>
  )
}
