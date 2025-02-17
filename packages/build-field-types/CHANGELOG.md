# @keystonejs/build-field-types

## 5.1.0

### Minor Changes

- [`a1e26deb`](https://github.com/keystonejs/keystone/commit/a1e26deb45d8c53e5d18b06c6573f66c4375b68c) [#1927](https://github.com/keystonejs/keystone/pull/1927) Thanks [@MadeByMike](https://github.com/MadeByMike)! - Refactored the admin-ui custom pages feature.

  You can now customise the admin-ui by creating a folder named `admin-ui` in your project directory or by specifying a path for hooks in the AdminUIApp constructor:

  ```
  new AdminUIApp({
    hooks: require.resolve('./admin-folder/'),
  });
  ```

  The index file in the admin-ui directory exports an object, which for now should only include pages:

  ```
  import Dashboard from './my-component/dashboard';

  export default {
    pages: () => [
      {
        label: 'A new dashboard',
        path: '',
        component: Dashboard
      },
    ],
  };
  ```

  Hooks are now functions. The pages hook should be a function that returns an array of pages.

  The shape of the pages array hasn't changed, except you can now include page components directly rather than with `require.resolve()`.

  The old API will continue to work but will be deprecated in future.

## 5.0.2

### Patch Changes

- [`7ee2af55`](https://github.com/keystonejs/keystone/commit/7ee2af550e9741ac0e0b08eef6533e95d7ecafc9) [#1922](https://github.com/keystonejs/keystone/pull/1922) Thanks [@Vultraz](https://github.com/Vultraz)! - Switched to @rollup/plugin-replace

## 5.0.1

### Patch Changes

- [`8735393e`](https://github.com/keystonejs/keystone/commit/8735393ec7b01dd0491700244e915b4b47c1cc53) [#1849](https://github.com/keystonejs/keystone/pull/1849) Thanks [@timleslie](https://github.com/timleslie)! - Updated the packages devDependencies.

* [`8226eb47`](https://github.com/keystonejs/keystone/commit/8226eb4709ea8ad5773c900eaaa96068d3cb6bad) [#1819](https://github.com/keystonejs/keystone/pull/1819) Thanks [@w01fgang](https://github.com/w01fgang)! - Upgraded `flow` and fixed flow errors and (probably) bugs.

- [`8226eb47`](https://github.com/keystonejs/keystone/commit/8226eb4709ea8ad5773c900eaaa96068d3cb6bad) [#1819](https://github.com/keystonejs/keystone/pull/1819) Thanks [@w01fgang](https://github.com/w01fgang)! - Upgraded `@emotion/core` and `@emotion/styled`.

## 5.0.0

### Major Changes

- [`7b4ed362`](https://github.com/keystonejs/keystone-5/commit/7b4ed3623f5774d7783c39962bfa1ce97938e310) [#1821](https://github.com/keystonejs/keystone-5/pull/1821) Thanks [@jesstelford](https://github.com/jesstelford)! - Release @keystonejs/\* packages (つ＾ ◡ ＾)つ

  - This is the first release of `@keystonejs/*` packages (previously `@keystone-alpha/*`).
  - All packages in the `@keystone-alpha` namespace are now available in the `@keystonejs` namespace, starting at version `5.0.0`.
  - To upgrade your project you must update any `@keystone-alpha/*` dependencies in `package.json` to point to `"@keystonejs/*": "^5.0.0"` and update any `require`/`import` statements in your code.

# @keystone-alpha/build-field-types

## 1.0.6

### Patch Changes

- [4e6a574d](https://github.com/keystonejs/keystone-5/commit/4e6a574d): Remove lodash.omitby dependency

## 1.0.5

### Patch Changes

- [37b52b7b](https://github.com/keystonejs/keystone-5/commit/37b52b7b): support windows paths in development build

## 1.0.4

### Patch Changes

- [42c3fbc9](https://github.com/keystonejs/keystone-5/commit/42c3fbc9): Upgrade jest dependency
- [42c3fbc9](https://github.com/keystonejs/keystone-5/commit/42c3fbc9): Upgrade emotion to 10.0.14
- [42c3fbc9](https://github.com/keystonejs/keystone-5/commit/42c3fbc9): Upgrade prettier to 1.18.2

## 1.0.3

### Patch Changes

- [afc7e835](https://github.com/keystonejs/keystone-5/commit/afc7e835):

  Remove broken automatic @babel/runtime installation

- [a738a247](https://github.com/keystonejs/keystone-5/commit/a738a247):

  Improve entrypoint package.json creation
  Remove dead code
  Update success messages

## 1.0.2

### Patch Changes

- [01f12bfb](https://github.com/keystonejs/keystone-5/commit/01f12bfb):

  Remove copy of preconstruct's require hook and use @preconstruct/hook instead

## 1.0.1

### Patch Changes

- [e502af66](https://github.com/keystonejs/keystone-5/commit/e502af66):

  Fix dist directories not being cleared before builds causing broken builds with build-field-types

## 1.0.0

### Major Changes

- [e6e95173](https://github.com/keystonejs/keystone-5/commit/e6e95173):

  - Remove `devBabelPlugin` export which is unnecessary now because there is now a runtime implementation of `importView` for dev
  - Remove `aliases` export which is superseded by the `dev` command

### Minor Changes

- [1a7b706c](https://github.com/keystonejs/keystone-5/commit/1a7b706c):

  - Create build-field-types package

### Patch Changes

- [81dc0be5](https://github.com/keystonejs/keystone-5/commit/81dc0be5):

  - Update dependencies
