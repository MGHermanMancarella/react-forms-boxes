//Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component.
import React, { useState } from 'react'
import NewBoxForm from './NewBoxForm'
import { v4 as uuid } from 'uuid'

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
            {/* {removeBoxButton(box.id)} */}
          </li>
        ))}
      </ul>
    )
  }

  /** Add new box object to page. */
  function addBox (box) {
    let newBox = { ...box, id: uuid() }
    setBoxes(boxes => [...boxes, newBox])
  }

  // function removeBoxButton (id) {
  //   const box =
  // }
  return (
    <div className='ShoppingList'>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  )
}

export default BoxList
