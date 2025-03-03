import React from 'react'

import './ResumeList.css'

export const ResumeList = ({
    className,
    children
}) => {

  // #region Rendering
  const classes = ['resume-list']
  if (className) {
    classes.push(className)
  }
  return (
    <ul className={classes.join(' ')}>
      {children}
    </ul>
  )
  // #endregion
}
