import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

export const Social = () => {

  // Hooks //

  const social = useSelector((state: RootState) => state.data.social)

  // Rendering //

  function renderSocial(socialEntry: ResumeSocial) {
    return (
      <li className='resume-social-entry'>
        {socialEntry.name}
        {socialEntry.link}
      </li>
    )
  }

  return (
    <section className='resume-social'>
      <h3 className='resume-social-title'>
        Social
      </h3>
      <ul className='resume-social-list'>
        {social.map(renderSocial)}
      </ul>
    </section>
  )
}
