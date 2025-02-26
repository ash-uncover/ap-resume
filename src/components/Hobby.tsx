import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

export const Hobby = () => {

  // Hooks //

  const hobbies = useSelector((state: RootState) => state.data.hobbies)

  // Rendering //

  function renderHobby(hobbyEntry: ResumeHobby) {
    return (
      <li className='resume-hobby-entry'>
        {hobbyEntry.name}
        {hobbyEntry.description}
      </li>
    )
  }

  return (
    <section className='resume-hobby'>
      <h3 className='resume-hobby-title'>
        Hobbies
      </h3>
      <ul className='resume-hobby'>
        {hobbies.map(renderHobby)}
      </ul>
    </section>
  )
}
