import React from 'react'

import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

export const Picture = () => {

  // #region Hooks
  const social = useSelector((state: RootState) => state.data.data.social)
  // #endregion

  // #region Rendering
  return (
    <section className='resume-picture'>
      <div>:o</div>
    </section>
  )
  // #endregion
}
