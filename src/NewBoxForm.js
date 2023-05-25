import React, { useState } from 'react'

function NewBoxForm ({ addBox }) {
  const initialState = {
    height: '',
    width: '',
    backgroundColor: ''
  }
  // multiple pieces of state
  const [formData, setFormData] = useState(initialState)

  /** Send {name, quantity} to parent
   *    & clear form. */
  function handleSubmit (evt) {
    evt.preventDefault()
    addBox(formData)
    setFormData(initialState)
  }

  /** Update local state w/curr state of input elem */
  function handleChange (evt) {
    const { name, value } = evt.target
    setFormData(fData => ({
      ...fData,
      [name]: value
    }))
  }
  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: 'block' }} htmlFor='height'>
        Height
      </label>
      <input
        type='number'
        id='height'
        name='height'
        value={formData.height}
        onChange={handleChange}
      />

      <label style={{ display: 'block' }} htmlFor='width'>
        Width
      </label>
      <input
        type='number'
        id='width'
        name='width'
        value={formData.width}
        onChange={handleChange}
      />
      <label style={{ display: 'block' }} htmlFor='backgroundColor'>
        Background Color
      </label>
      <input
        id='backgroundColor'
        name='backgroundColor'
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add a new item!</button>
    </form>
  )
}

export default NewBoxForm
