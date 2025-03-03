import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ContactEntry.css'

export const ContactEntry = ({
  className,
  icon,
  text
}) => {

  // #region Rendering
  const classes = ['contact-entry']
  if (className) {
    classes.push(className)
  }
  return (
    <li className={classes.join(' ')}>
      {icon && icon.length && <FontAwesomeIcon icon={icon} />}
      <span className='contact-entry-text'>{text}</span>
    </li>
  )
  // #endregion
}
