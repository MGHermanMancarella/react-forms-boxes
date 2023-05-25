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

function Box ({ height, width, backgroundColor, remove }) {
  return (
    <li
      style={{
        backgroundColor: backgroundColor,
        height: `${height}px`,
        width: `${width}px`
      }}
    >
      <button> onClick={remove} </button>
    </li>
  )
}

export default Box
