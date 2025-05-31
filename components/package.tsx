/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

// Importing the "ExtendedZigPackage" interface to
// use it as a properties interface.
import { ExtendedZigPackage } from '../lib/api.ts';

/**
 * A functional component to display detailed
 * information on a Zig package.
 * @param {ExtendedZigPackage} props The props for this component.
 */
export function PackageListing(props: ExtendedZigPackage){
  return(
    <div class="main">
     <div class="userReadme" dangerouslySetInnerHTML={{ __html: props.readme }} />
     <div class="spacer"></div>
     <div class="packageInfo">
      <h2 class="pkgName">{ props.name }</h2>
      <p class="pkgRepo">{ 'Link: ' + props.publicUrl }</p>
      <ul class="pkgStats">
       <li class="pkgStats">{ 'Stars: ' + props.stars }</li>
       <li class="pkgStats">{ 'Forks: ' + props.forks }</li>
      </ul>
     </div>
     <div class="spacer"></div>
     <div class="pkgAuthor">
      <img class="pkgAuthor" src={ props.ownerPic }/>
      <p class="pkgAuthor">{ props.owner }</p>
     </div>
     <div class="spacer"></div>
    </div>
  );
}

// Exporting the component.
export default PackageListing;
