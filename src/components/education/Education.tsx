import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'
import { ResumeTitle } from '../common/ResumeTitle'

export const Education = () => {

  // #region Hooks
  const education = useSelector((state: RootState) => state.data.data.education)
  // #endregion

  // #region Rendering
  if (education && education.length) {
    return (
      <section className='resume-education'>
        <ResumeTitle
          className='resume-education-title'
          text='Education'
        />
        <ul className='resume-education-lsit'>
          {education.map((entry, index) => <EducationEntry key={index} {...entry} />)}
        </ul>
      </section>
    )
  }

  return null
  // #endregion
}

const EducationEntry = (props: ModelResumeEducation) => {

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