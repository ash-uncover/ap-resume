import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'
import { ResumeTitle } from '../common/ResumeTitle'

export const Hobby = () => {

  // Hooks //

  const hobbies = useSelector((state: RootState) => state.data.data.hobbies)

  // Rendering //

  function renderHobby(hobbyEntry: ModelResumeHobby) {
    return (
      <li
        key={hobbyEntry.name}
        className='resume-hobby-entry'
      >
        {hobbyEntry.name}
        {hobbyEntry.description}
      </li>
    )
  }

  return (
    <section className='resume-hobby'>
      <ResumeTitle
        className='resume-hobby-title'
        text='Hobbies'
      />
      <ul className='resume-hobby'>
        {(hobbies || []).map(renderHobby)}
      </ul>
    </section>
  )
}
