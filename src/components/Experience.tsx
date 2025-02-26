import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

export const Experience = () => {

  // Hooks //

  const experience = useSelector((state: RootState) => state.data.experience)

  // Rendering //

  if (experience.length) {
    return (
      <section className='resume-experience'>
        <h3 className='resume-experience-title'>
          Experience
        </h3>
        <ul className='resume-experience'>
          {experience.map((entry, index) => <ExperienceEntry key={index} {...entry} />)}
        </ul>
      </section>
    )
  }

  return null
}

const ExperienceEntry = (props: ResumeExperience) => {

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