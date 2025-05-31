/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

// Importing the "useState"
// function to set stateful data.
import { useState } from 'preact/hooks';

// Importing the "useEffect" function
// to set asynchronous data.
import { useEffect } from 'preact/hooks';

// Importing the "fetchPackage" function to
// fetch information on a package.
import { fetchPackage } from '../lib/api.ts';

// Importing the "UserMsg" component to display
// messages.
import { UserMsg } from '../components/msg.tsx';

// Importing the "ExtendedZigPackage" interface
// to fetch and cast detailed information on a 
// Zig package.
import { ExtendedZigPackage } from '../lib/api.ts';

// Importing the "PackageListing" component to render
// detailed info on a Zig package.
import { PackageListing } from '../components/package.tsx';

/**
 * An interface to save
 * properties for the
 * "PackaListingPage"
 * component.
 */
interface PackageListingPageProps {

  /** The name of the package. */
  name: string,

  /** The owner of the package. */
  owner: string
}

/**
 * A functional component to render detailed
 * information on a Zig package.
 * @param {PackageListingPageProps} props The properties
 * for this component.
 */
export function PackageListingPage(
  props: PackageListingPageProps
){
  const [error, setError] = useState<string>();
  const [data, setData] = useState<ExtendedZigPackage>();
  useEffect(
    () => {
      async function fetchData() {
        try {
          const result = await fetchPackage(props.owner, props.name);
          setData(result);
        }
        catch (e) {
          setError(e instanceof Error ? e.message : String(e));
        }
      }
      fetchData();
    }, 
    [props.owner, props.name]
  );
  if (error) return <UserMsg msg={error}/>;
  if (!data) return <UserMsg msg={"Loading..."}/>;
  return (
    <>
     <PackageListing
      name={data.name}
      stars={data.stars}
      forks={data.forks}
      owner={data.owner}
      ownerPic={data.ownerPic}
      publicUrl={data.publicUrl}
      docPage={data.docPage}
      readme={data.readme}
      description={data.description}
     />
    </>
  );
}

// Exporting the component.
export default PackageListingPage;
