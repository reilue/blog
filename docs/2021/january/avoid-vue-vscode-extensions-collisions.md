# How to solve Vue VSCode Extension Collision

Recently watch [vue-mastery](https://www.vuemastery.com/courses/real-world-vue-js/optimizing-your-editor), i found out a very subtle and important detail in which the devils always awaits.

[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) and [Sarah drasner](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets), extention from VSCode, allow us to make the Vue development experience much more seamless, by provinding snippets to supercharge our workflow.

## Solution

Even thou, using this extension lead to a collision, so to solve this, you'll need

- VSCode installed
- [Vetur Extension Installed](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Sarah drasner Extension Installed](https://marketplace.visualstudio.com/itemsitemName=sdras.vue-vscode-snippets)

Go to `settings`, `userspace`, and in the JSON set this

    "vetur.completion.useScaffoldSnippets": false

and voilà.
