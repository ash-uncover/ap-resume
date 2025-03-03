import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'
import { ResumeTitle } from '../common/ResumeTitle'

export const Expertise = () => {

  // Hooks //

  const expertise = useSelector((state: RootState) => state.data.data.expertise)

  // Rendering //

  function renderExpertise(expertiseEntry: ModelResumeExpertise) {
    return (
      <li
        key={expertiseEntry.name}
        className='resume-expertise-entry'
      >
        {expertiseEntry.name}
        {expertiseEntry.description}
      </li>
    )
  }

  return (
    <section className='resume-expertise'>
      <ResumeTitle
        className='resume-expertise-title'
        text='Expertise'
      />
      <ul className='resume-expertise-list'>
        {(expertise || []).map(renderExpertise)}
      </ul>
    </section>
  )
}
