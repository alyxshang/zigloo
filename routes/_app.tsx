/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

// Importing the "Head" component.
import { Head } from "$fresh/runtime.ts"

// Importing the "AppProps" interface.
import { AppProps } from "$fresh/server.ts"

/**
 * A functional component to set a "<head>"
 * element for the whole app.
 * @param {AppProps} { Component } Any component rendered.
 */
export function App({ Component }: AppProps) {
  return (
    <>
     <Head>
      <link rel="stylesheet" href="/styles.css" />
      <link rel="stylesheet" href="https://cdn.alyxshang.boo/css/sparkfonts.css" type="text/css"/>
     </Head>
     <Component/>
    </>
  );
}

// Exporting the 
// component.
export default App;
