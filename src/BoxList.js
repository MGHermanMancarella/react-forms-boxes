//Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component.
import React, { useState } from 'react'
import NewBoxForm from './NewBoxForm'
import { v4 as uuid } from 'uuid'
import Box from './Box'

/** Box list: manages boxes
 *
 * State:
 * - boxes: array like [ { data, id }, ... ]
 *
 * boxes -> NewBoxForm
 *
 * { height, width, backgroundColor, removeButton }
 */

function BoxList () {
  const [boxes, setBoxes] = useState([])

  function renderBoxes () {
    return (
      <ul>
        {boxes.map(box => (
          <li key={box.id}>
            {box.data}
            <button onClick={() => removeBox(box.id)}>Remove The Box!</button>
          </li>
        ))}
      </ul>
    )
  }
  /** Create a box from inputs */

  /** Add new box object to page. */
  function addBox (data) {
    let newBox = Box(data)
    newBox = { ...newBox, id: uuid() }
    setBoxes(boxes => [...boxes, newBox])
  }

  /** Removes box and sets new state */
  function removeBox (boxId) {
    // Filter out the box with the given ID
    const updatedBoxes = boxes.filter(box => box.id !== boxId)
    // Update the state
    setBoxes(updatedBoxes)
  }
  return (
    <div className='ShoppingList'>
      <NewBoxForm addBox={addBox} />
      {renderBoxes}
    </div>
  )
}

export default BoxList
