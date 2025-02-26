import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

export const Contact = () => {

  // Hooks //

  const contact = useSelector((state: RootState) => state.data.contact)

  // Rendering //

  function renderPhone() {
    return (
      <li className='resume-contact-phone'>
        {contact.phone}
      </li>
    )
  }

  function renderEmail() {
    return (
      <li className='resume-contact-email'>
        {contact.email}
      </li>
    )
  }

  function renderAddress() {
    return (
      <li className='resume-contact-address'>
        {contact.address}
      </li>
    )
  }

  return (
    <section className='resume-contact'>
      <h3 className='resume-contact-title'>
        Contacts
      </h3>
      <ul className='resume-contact-list'>
        {contact.phone && renderPhone()}
        {contact.email && renderEmail()}
        {contact.address && renderAddress()}
      </ul>
    </section>
  )
}
