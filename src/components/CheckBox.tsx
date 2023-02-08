import React, { useEffect, useState } from 'react'

interface Probs {
  isChecked: boolean,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  label: string,
}

const CheckBox = (probs: Probs) => {
  return (
    <>
    <div>
      <label htmlFor='{probs.label}>{probs.label}'></label>
      <input
        type='checkbox'
        id={probs.label}
        checked={probs.isChecked}
        onChange={probs.handleChange}
        >
      </input>
    </div>
    </>
  )
}

export default CheckBox