// Example: astro.config.mjs

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  alias: {
    $components: "./src/components",
    $layouts: "./src/layouts",
    $: "./src",
  },
});
