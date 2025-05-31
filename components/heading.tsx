/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

/**
 * An interface
 * for the props
 * for the app heading.
 */
interface HeadingProps{

  /** The app's name. */
  name: string
}

/**
 * A functional component to display the app's title.
 * @param {HeadingProps} props The props for the heading.
 */
export function Heading(
  props: HeadingProps
){
  return (
    <div class="heading">
     <h1 class="heading">{ props.name }</h1>
    </div>
  );
}

// Exporting the component.
export default Heading;
