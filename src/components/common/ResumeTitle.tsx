import React from 'react'

import './ResumeTitle.css'

export const ResumeTitle = ({
    className,
    text
}) => {

  // #region Rendering
  const classes = ['resume-title']
  if (className) {
    classes.push(className)
  }
  return (
    <h3 className={classes.join(' ')}>
      {text}
    </h3>
  )
  // #endregion
}
