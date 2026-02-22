## Decoding Nuxt 4's TypeScript config files

## Repo Overview

This repo is the companion to my article on understanding Nuxt 4's TypeScript config files:

- https://davestewart.co.uk/blog/decoding-nuxt-tsconfig

The repo is a simple Nuxt 4 project, but with the `.nuxt` committed to the repo, and with tweaks and comments in the files to make them easier to understand.

## Article Overview

The article itself covers how things fit together, specifically:

- core `tsconfig.json` file
- the individual `.nuxt/tsconfig.*.json` files
- their `compilerOptions` properties
- their `includes` arrays
- their `excludes` arrays
- related `<reference />` files

## Get Started

Install dependencies:

```
pnpm i
```

Open `tsconfg.json` in your editor, and `Cmd+Click` any of the `references` file names to jump to their definitions.

You can compare

> [!NOTE]
> **Don't build the project!**
>
> Because Nuxt will rewrite these files, and the aim of the exercise to understand the structure and relationship of the entries to each other.

See the article for more details.
