# my-cypress

## 遇到的问题

### 适用TypeScript
需要用到webpack和ts-loader来解析
```js
//cy-ts-preprocessor

const wp = require('@cypress/webpack-preprocessor');
const path = require('path');

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/loader"
          }
        ]
      }
    ]
  }
}

const options = {
  webpackOptions
}

module.exports = wp(options)
```
在plugins里增加此中间件
```js
const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
 on('file:preprocessor', cypressTypeScriptPreprocessor, cucumber());
}
```
### 整合cucumber
1. 需要 `cypress-cucumber-preprocessor` 插件, 并在plugins中适用
2. 需要在webpack中增加 feature 文件的loader
3. 注意step文件对应的目录, 乱放找不到
4. cucumber相关的方法需要从`cypress-cucumber-preprocessor/steps`中获取，比如自定义类型:
```ts
import { defineParameterType } from "cypress-cucumber-preprocessor/steps";

defineParameterType({  
    name: 'color',
    regexp: /红色|黄色|蓝色/,
    transformer: s => s
})
```
