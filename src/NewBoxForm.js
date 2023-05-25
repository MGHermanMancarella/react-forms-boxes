import { v4 as uuid } from 'uuid'

function NewBoxForm () {
  // multiple pieces of state
  const [formData, setFormData] = useState({
    height: '',
    width: '',
    backgroundColor: '',
    remove: ''
  })

  // multiple handleChange functions

  function handleChange (evt) {
    const fieldName = evt.target.name
    const value = evt.target.value

    setFormData(currData => {
      currData[fieldName] = value
      return { ...currData }
    })
  }
  let fieldThatChanged = 'firstName'

  let newState = {
    ...oldState,
    [fieldThatChanged]: newValue
  }
}

export default NewBoxForm
