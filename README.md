# TRPC Typescript Problem Reproduction

This repo intends to reproduce an issue where running `tsc` with `noEmit` to type-check one package applies its rules to files brought in with a relative import from a separate package, and their subsequent dependencies.

The demo is built with SST, but you don't have to have that running to produce the issue.

The problem stems from [packages/web/src/trpc.ts](packages/web/src//trpc.ts) where the type of the trpc router is imported.

**Note:** `noUnusedLocals` and `noUnusedParameters` are explicitly enabled in the `web` project, but disabled in the `api` project - to demonstrate the mixing of rules.

## To reproduce...

```sh
# Install dependencies
pnpm install

# builds the Vite app - or cd to packages/web and run 'pnpm build' there.
pnpm web build
```
