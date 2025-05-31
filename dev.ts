#!/usr/bin/env -S deno run -A --watch=static/,routes/

/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";
import "$std/dotenv/load.ts";
await dev(import.meta.url, "./main.ts", config);
