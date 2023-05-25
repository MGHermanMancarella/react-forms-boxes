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

function Box({ id, height=50, width=50, backgroundColor="pink" }) {
  console.log(height, width, backgroundColor);
  return (
    <div style = {{
      backgroundColor: backgroundColor,
      height: `${height}px`,
      width: `${width}px`
    }}></div>
  );
}

export default Box;
