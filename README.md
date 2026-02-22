## Nuxt 4 Build Folder Deep Dive

## Repo Overview

This repo is the companion to my article on understanding Nuxt 4's build folder and TypeScript configuration:

- https://davestewart.co.uk/blog/nuxt-build-deep-dive

The repo is a Nuxt 4 / Nuxt Content starter project, with the `.nuxt` committed to the repo, and the files annotated and with folder README's to explain how everything fits together.

## Get Started

You can view the repo directly on GitHub, or install locally and click around:

```bash
npm install
```

> [!IMPORTANT]
> Make sure to install with NPM _only_ (rather than PNPM or Yarn) so all paths correctly reference the correct `node_modules` folders

Also, at this point, **don't run the dev server** as it will overwrite the file annotations in the build folder!

Next:

- open `tsconfg.json` in your editor, and `Cmd+Click` any of the `references` file names to jump to their definitions
- take a look at the `.nuxt` folder to see the individual files
- check out the `README.md` files in each folder

See the article for more details.
