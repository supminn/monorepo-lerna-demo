# Unlesh your monorepo: An introduction to Lerna monorepo

This is a tutorial of using Lerna version 7 which is under the stewardship of Nx

Lerna uses Nx to detect packages in the workspace and dependencies between them. Lerna leverages Nx's powerful task runner to run scripts, allowing you to run them in parallel, cache results, and distribute them across multiple machines, all while ensuring that dependencies between packages are respected.

You can read more about the features of Lerna with Nx from [this blog](https://blog.nrwl.io/whats-new-with-lerna-6-5-4a4f69371504)

Here's a [blog](https://betterprogramming.pub/lerna-monorepo-with-vite-and-storybook-e29e54559214) on how to create a monorepo with lerna, vite and storybook setup.

## Commands

- `npx lerna init` - create a lerna monorepo
- `npx lerna add-caching` - add Nx caching capabilities to lerna
- `npx nx connect-to-nx-cloud` - remote caching mechanism

## Link to my talk

- [JSLovers at RazorPay Bengaluru](https://youtu.be/GSXLXuDviWQ?t=813)
- [CityJS India at New Delhi](https://youtu.be/P9uRGfWqOq4?t=5804)
