/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

// Importing the "PageProps" entity to
// use Fresh's server page properties.
import { PageProps } from '$fresh/server.ts';

// Importing the island component to do work on the
// client to fetch information on a Zig package
// asynchronously.
import { PackageListingPage } from '../../islands/listing.tsx';

// Importing the "Heading" component.
import { Heading } from '../../components/heading.tsx';

/**
 * A functional component that extracts parameters
 * from the url and calls the island for rendering
 * detailed information on a package.
 * @param {PageProps} props The page properties.
 */
export function ListingPage(props: PageProps){
  const { subject } = props.params;
  const split: Array<string> = subject.split('&');
  const owner: string = split[0];
  const name: string = split[1];
  return(
    <>
     <Heading name={"ZIGLOO"}/>
     <div class="spacer"></div>
     <PackageListingPage name={name} owner={owner}/>
    </>
  );
}

// Exporting the component.
export default ListingPage;
