import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'
import { ResumeTitle } from '../common/ResumeTitle'

export const Experience = () => {

  // #region Hooks
  const experience = useSelector((state: RootState) => state.data.data.experience)
  // #endregion

  // #region Rendering
  if (experience && experience.length) {
    return (
      <section className='resume-experience'>
        <ResumeTitle
          className='resume-experience-title'
          text='Experience'
        />
        <ul className='resume-experience'>
          {experience.map((entry, index) => <ExperienceEntry key={index} {...entry} />)}
        </ul>
      </section>
    )
  }

  return null
  // #endregion
}

const ExperienceEntry = (props: ModelResumeExperience) => {

  // Rendering //

  return (
    <li className='resume-experience-entry'>
      {props.startdate}
      {props.enddate}
      {props.company}
      {props.jobtitle}
      {props.description}
      {props.skills.join(',')}
    </li>
  )
}