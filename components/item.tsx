/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

/**
 * An interface
 * for the props
 * for a single item.
 */
interface ItemProps {
  /** The name of the package. */
  name: string,

  /** The number of stars for a package. */
  stars: number,

  /** The number of forks a package has. */
  forks: number,

  /** The author of the package. */
  owner: string,

  /** The profile picture of the author. */
  ownerPic: string,

  /** The package's description. */
  description: string,
}

/**
 * A functional component to display a single
 * item for the listview.
 * @param {ItemProps} props The props for a single item.
 */
export function Item(
  props: ItemProps
){
  const route: string = '/package/' + props.owner + '&' + props.name;
  return (
    <>
     <div class="item">
      <h2 class="item"><a class="item" href={route}>{ props.name }</a></h2>
       <p class="item">{ props.description }</p>
       <ul class="stats">
        <li class="stats">{ 'Stars:' + props.stars }</li>
        <li class="stats">{ 'Forks:' + props.forks }</li>
       </ul>
       <div class="itemAuthor">
        <img class="itemAuthor" src={ props.ownerPic }/>
        <p class="itemAuthor">{ props.owner }</p>
       </div>
     </div>
     <div class="spacer"></div>
    </>
  )
}

// Exporting the component.
export default Item;
