/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

import "$std/dotenv/load.ts";
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";
await start(manifest, config);
