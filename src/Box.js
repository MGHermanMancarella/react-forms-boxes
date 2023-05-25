//This component should display a div with a background color, width, and height based on the props passed to it.

/** A single box.
 *
 * This has no state --- just four props:
 *
 * - height, width, and backgroundColor, remove
 *
 * remove is an injected function
 *
 **/

function Box ({ height, width, backgroundColor }) {
  return (
    <li
      style={{
        backgroundColor: { backgroundColor },
        height: `${height}px`,
        width: `${width}px`
      }}
    ></li>
  )
}

export default Box
