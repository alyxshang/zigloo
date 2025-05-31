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

// Importing the "ZigPackage" interface
// to use it as a properties interface.
import { ZigPackage } from '../lib/api.ts';

// Importing the function to fetch info
// on all packages from the GitHub API.
import { fetchPackages } from '../lib/api.ts';

// Importing the "Item" component to render
// a listview of items.
import { Item } from '../components/item.tsx';

// Importing the "UserMsg" component to display
// messages.
import { UserMsg } from '../components/msg.tsx';

/**
 * A functional component to render
 * a listview of all Zig packages with
 * certain topics set.
 */
export function HomePage(){
  const [error, setError] = useState<string>();
  const [data, setData] = useState<Array<ZigPackage>>();
   useEffect(
    () => {
      async function fetchData(){
        try{
          const result = await fetchPackages();
          setData(result);
        }
        catch(e){
          setError(e instanceof Error ? e.message : String(e));
        }
      }
      fetchData()
    },
    []
  );
  if (error) return <UserMsg msg={error}/>;
  if (!data) return <UserMsg msg={"Loading..."}/>;
  return (
    <>
     <div class="spacer"></div>
     <div class="main">
      {
        data.map(
          (pkg) => 
           <Item
            name={pkg.name}
            stars={pkg.stars}
            forks={pkg.forks}
            owner={pkg.owner}
            ownerPic={pkg.ownerPic}
            description={pkg.description}
           />
        ) 
      }
     </div>
    </>
  );
}

// Exporting the component.
export default HomePage;
