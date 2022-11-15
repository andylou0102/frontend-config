# frontend-config

frontend project configuration setting

## Packages
- `@frontend-config/eslint-config-basic`
  - For projects with only .js files
- `@frontend-config/eslint-config-ts`
  - Extends from `@frontend-config/eslint-config-basic` and includes .ts files rules
  - For projects with .ts and .js files
- `@frontend-config/eslint-config-vue3`
  - Extends from `@frontend-config/eslint-config-ts` and includes .vue files rules
  - For project base on Vue3 and includes .vue files

## Use
1. add `devDependencies` below in `package.json`
  ```jsonc
  // package.json
  {
    "devDependencies": {
      "@frontend-config/eslint-config-vue3": "github:andylou0102/frontend-config#eslint-config-vue3@x.x.x",
    }
  }
  ```
2. run `pnpm i`
3. add corresponding package to the `extends` in `.eslintrc.*`