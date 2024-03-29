# @tksst/project-configs

## 4.0.1

### Patch Changes

-   3ed9c11: Adjust the tsconfig.json "module" and "moduleResolution".

    https://devblogs.microsoft.com/typescript/announcing-typescript-5-2/#module-and-moduleresolution-must-match-under-recent-node-js-settings

    ```
    In TypeScript 5.2, when using node16 or nodenext for either of the --module and --moduleResolution options, TypeScript now requires the other to have a similar Node.js-related setting.
    ```

## 4.0.0

### Major Changes

-   4c7cbfb: Change the package name from typescript-starter-configs to project-configs since the package is no longer just for the project with typescript.

## 3.1.0

### Minor Changes

-   25f4212: export a changesets commit message config

## 3.0.0

### Major Changes

-   5a2fa63: Remove support for semantic release configuration.

## [2.1.0](https://github.com/tksst/typescript-starter-configs/compare/v2.0.0...v2.1.0) (2023-01-15)

### Features

-   enable GitHub Actions Reporter ([ba588f9](https://github.com/tksst/typescript-starter-configs/commit/ba588f9a4fdb7afcafbafba07e28c2e409d0efca))

## [2.0.0](https://github.com/tksst/typescript-starter-configs/compare/v1.0.0...v2.0.0) (2022-12-15)

### Features

-   change default to not minify ([6082122](https://github.com/tksst/typescript-starter-configs/commit/6082122875ca1ff932bc307ddd9fb875221d7d47))
-   exports a semantic-release configuration ([5586ff6](https://github.com/tksst/typescript-starter-configs/commit/5586ff664d8e38dc064f83154379b13ae7c3d7fe))

### BREAKING CHANGES

-   change default to not minify. If minifying is a requirement, you need to change the settings of tsup to minify by yourself.

## 1.0.0 (2022-09-11)

### Features

-   This is the first release of typescript-starter-configs ([2dfafc7](https://github.com/tksst/typescript-starter-configs/commit/2dfafc7038720a019ab092143baca7361dfb558c))
