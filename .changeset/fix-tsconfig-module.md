---
"@tksst/project-configs": patch
---

Adjust the tsconfig.json "module" and "moduleResolution".

https://devblogs.microsoft.com/typescript/announcing-typescript-5-2/#module-and-moduleresolution-must-match-under-recent-node-js-settings

```
In TypeScript 5.2, when using node16 or nodenext for either of the --module and --moduleResolution options, TypeScript now requires the other to have a similar Node.js-related setting.
```
