import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'
import { ResumeTitle } from '../common/ResumeTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactEntry } from './ContactEntry'
import { ResumeList } from '../common/ResumeList'

export const Contact = () => {

  // #region Hooks
  const contact = useSelector((state: RootState) => state.data.data.contact)
  const social = useSelector((state: RootState) => state.data.data.social)
  // #endregion

  // #region Rendering
  function renderPhone() {
    return (
      <ContactEntry
        className='resume-contact-phone'
        icon={['fas', 'phone']}
        text={contact.phone}
      />
    )
  }
  function renderEmail() {
    return (
      <ContactEntry
        className='resume-contact-email'
        icon={['fas', 'envelope']}
        text={contact.email}
      />
    )
  }
  function renderAddress() {
    return (
      <ContactEntry
        className='resume-contact-address'
        icon={['fas', 'house']}
        text={contact.address}
      />
    )
  }
  function renderSocial(socialKey: string) {
    const socialEntry = social[socialKey]
    return (
      <ContactEntry
        key={socialKey}
        className='resume-contact-social-entry'
        icon={['fas', socialKey]}
        text={socialEntry}
      />
    )
  }
  return (
    <section className='resume-contact'>
      <ResumeTitle
        className='resume-contact-title'
        text='Contacts'
      />
      <ResumeList className='resume-contact-list'>
        {contact.phone && renderPhone()}
        {contact.email && renderEmail()}
        {contact.address && renderAddress()}
        {Object.keys(social).map(renderSocial)}
      </ResumeList>
    </section>
  )
  // #endregion
}
