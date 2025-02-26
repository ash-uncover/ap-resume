import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

export const Expertise = () => {

  // Hooks //

  const expertise = useSelector((state: RootState) => state.data.expertise)

  // Rendering //

  function renderExpertise(expertiseEntry: ResumeExpertise) {
    return (
      <li className='resume-expertise-entry'>
        {expertiseEntry.name}
        {expertiseEntry.description}
      </li>
    )
  }

  return (
    <section className='resume-expertise'>
      <h3 className='resume-expertise-title'>
        Expertise
      </h3>
      <ul className='resume-expertise-list'>
        {expertise.map(renderExpertise)}
      </ul>
      </section>
  )
}
