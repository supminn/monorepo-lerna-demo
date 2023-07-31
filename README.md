# Unlesh your monorepo: An introduction to Lerna monorepo

This is a tutorial of using Lerna version 7 which is under the stewardship of Nx

We would have 3 packages

1. Header with userInfo - signin and signup
1. Main package to display some information based on anonymous or logged in user
1. Utils package that mainly has icons, text encoder and other commonly used files
1. (Optional) Footer package

## Understanding from docs

- Lerna uses Nx to detect packages in the workspace and dependencies between them. Lerna leverages Nx's powerful task runner to run scripts, allowing you to run them in parallel, cache results, and distribute them across multiple machines, all while ensuring that dependencies between packages are respected.

## Flow

- What are monorepos
- Benefits
- Talk about lerna in general and along with nx
- Explain with our code example

  - Mention the atoms package (components)
  - Show header package consuming atoms and user signin
  - Show main package consuming header as well as atoms
  - Make a change to header -> test and build process (only 2 packages would be tested)
  - Make a change to atoms -> test and build process (all 3 package would be tested)

- Show ck12.org/flexi
  - Mention about its feature, mini demo
  - Technical: Talk about header component
  - Mention about component library (separate package)
  - Chatbot package that consumes both
  - Show an example of myScript or math-live keyboard
  - Show the clarifactions pannel -> run rephrase
  - Ask them to give it a try, spread a word about it to high school and college students

## References

[Foreign accent](https://www.youtube.com/watch?v=BO1rwynFBLM&t=114s)
[Crash course lerna](https://www.youtube.com/watch?v=WD5T-VMCTvY)
