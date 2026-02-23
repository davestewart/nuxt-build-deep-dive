## Nuxt 4 Build Folder Deep Dive

## Repo Overview

This repo is the companion to my article on understanding Nuxt 4's build folder and TypeScript configuration:

- https://davestewart.co.uk/blog/nuxt-build-deep-dive

The repo is:

- a Nuxt 4 / Nuxt Content starter project
- with the `.nuxt` committed to the repo
- with folder README's and file annotations to explain how everything fits together

## Get Started

You can view the repo directly on GitHub, or install locally and click around:

```bash
npm install
```

> [!IMPORTANT]
> Make sure to install with NPM _only_ (rather than PNPM or Yarn) so all paths correctly reference the correct `node_modules` folders

Also, at this point, **don't run the dev server** as it will overwrite the file annotations in the build folder!

Next:

- open `tsconfig.json` in your editor and `Cmd+Click` the `references` to jump to the definitions
- open the `.nuxt` folder to see the individual files
- view the `README.md` in each parent folder
- view the annotations in the individual files

See the article for more details.
