import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

export const Education = () => {

  // Hooks //

  const education = useSelector((state: RootState) => state.data.education)

  // Rendering //

  if (education.length) {
    return (
      <section className='resume-education'>
        <h3 className='resume-education-title'>
          Education
        </h3>
        <ul className='resume-education-lsit'>
          {education.map((entry, index) => <EducationEntry key={index} {...entry} />)}
        </ul>
      </section>
    )
  }

  return null
}

const EducationEntry = (props: ResumeEducation) => {

  // Rendering //

  return (
    <li className='resume-education-entry'>
      {props.startdate}
      {props.enddate}
      {props.school}
      {props.diploma}
      {props.description}
      {props.skills.join(',')}
    </li>
  )
}