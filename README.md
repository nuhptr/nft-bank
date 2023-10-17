#  Hoobank

![Hoobank](https://github.com/nuhptr/react-hoobank-website/assets/50306963/9632a510-1093-4875-9a5b-670a2c7048ce)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```
