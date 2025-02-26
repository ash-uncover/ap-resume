import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

export const General = () => {

  // Hooks //

  const firstname = useSelector((state: RootState) => state.data.firstname)
  const lastname = useSelector((state: RootState) => state.data.lastname)
  const nationality = useSelector((state: RootState) => state.data.nationality)
  const birthdate = useSelector((state: RootState) => state.data.birthdate)
  const title = useSelector((state: RootState) => state.data.title)
  const description = useSelector((state: RootState) => state.data.description)

  // Rendering //


  return (
    <section className='resume-general'>
      <h1>{firstname} {lastname}</h1>
      <h2>{title}</h2>
      <div>{description}</div>
      <div>{nationality}</div>
      <div>{birthdate}</div>
    </section>
  )
}
