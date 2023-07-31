# Unlesh your monorepo: An introduction to Lerna monorepo

This is a tutorial of using Lerna version 7 which is under the stewardship of Nx

We would have 3 packages

1. Header with userInfo - signin and signup
1. Main package to display some information based on anonymous or logged in user
1. Utils package that mainly has icons, text encoder and other commonly used files
1. (Optional) Footer package

## Understanding from docs

- Lerna uses Nx to detect packages in the workspace and dependencies between them. Lerna leverages Nx's powerful task runner to run scripts, allowing you to run them in parallel, cache results, and distribute them across multiple machines, all while ensuring that dependencies between packages are respected.
