/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

// Importing the "HomePage"
// component to render the island
// that displays all info on all 
// Zig packages meeting certain
// criteria.
import { HomePage } from '../islands/home.tsx';

// Importing the "Heading" component.
import { Heading } from '../components/heading.tsx';

/**
 * A functional component to render
 * the homepage.
 */
export function Home() {
  return (
    <>
     <Heading name={"ZIGLOO"}/>
     <HomePage/> 
    </>
  );
}

// Exporting the component.
export default Home;
