# Demo TypeScript Project for Node and Browser

This project includes configuration and build steps to run TypeScript for browser and Node, without mixing and mangling types!

It uses a project reference `tsconfig.json` (root directory) that referes to two projects:

- `client`. Client activates the `dom` library and thus is available to use browser APIs
- `server`. The server doesn't have `dom` active, but refers to `express` and `node` types.

It's important to maintain the `lib` property.
