/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

// Importing all functions from the
// API-handling file.
import * as api from '../lib/api.ts';

// Importing the "assertEquals" function.
import { assertEquals } from 'assert';

// Importing the app's manifest.
import manifest from "../fresh.gen.ts";

// Importing the app's configuration.
import config from "../fresh.config.ts";

// Importing the "createHandler" function.
import { createHandler } from "$fresh/server.ts";

// Defining a connection information
// instance.
const connection = {
  remoteAddr: {
    hostname: "127.0.0.1",
    port: 1234,
    transport: "tcp",
  },
};

// Testing the "fetchPackages" function.
Deno.test(
  "Testing the \"fetchPackages\" function.",
  async () => {
    const packages: Array<api.ZigPackage> = await 
      api.fetchPackages();
    assertEquals(packages.length != 0, true);
  }
);

// Testing the "fetchPackage" function.
Deno.test(
  "Testing the \"fetchPackage\" function.", 
  async () => {
    const result: api.ExtendedZigPackage = 
      await api.fetchPackage(
        "karlseguin",
        "http.zig"
      );
    assertEquals(result.name !== "", true);
  }
);

// Testing the "getReadme" function.
Deno.test(
  "Testing the \"getReadme\" function.",
  async () => {
    const readme: string = await api.getReadme(
      'karlseguin', 'http.zig');
    assertEquals(readme != '', true);
  }
);

// Testing all app routes.
Deno.test(
  "Testing app routes.", 
  async (tester) => {
    const handler = await createHandler(manifest, config);

    // Testing the "/" route.
    await tester.step(
      "Testing the root route.", 
      async () => {
        const response = await handler(
          new Request("http://127.0.0.1/"),
          connection
        );
        assertEquals(response.status, 200);
      }
    );

    // Testing the "/owner&package" route.
    await tester.step(
      "Testing the package route.", 
      async () => {
        const response = await handler(
          new Request("http://127.0.0.1/package/karlseguin&http.zig"),
          connection
        );
        assertEquals(response.status, 200);
      }
    );
  }
);
