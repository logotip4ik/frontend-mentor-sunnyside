import preprocess from "svelte-preprocess";

import { breakpoints } from "./src/lib/constants.js";

const dataString = Object.entries(breakpoints).reduce(
  (acc, [key, value]) => acc + `$breakpoint-${key.toLowerCase()}:${value}px;`,
  ""
);

const config = {
  preprocess: preprocess({ scss: { prependData: dataString } }),
};

export default config;
