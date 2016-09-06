# 兼容ie8/9/10

## Css

> [很好用的检查css代码的浏览器兼容性工具](https://github.com/anandthakker/doiuse),能作为 `postcss` 插件配置，具体看 webpack.base.config.babel.js

* ie8不兼容 `background-image` [caniuse](http://caniuse.com/#search=background-img-opts)
 解决方法: [background-size-polyfill](https://github.com/louisremi/background-size-polyfill)
 ```
 .selector { 
     background-size: cover;
     -ms-behavior: url(/backgroundsize.min.htc);
 }
 ```
 
* ie8/9不兼容 `flexbox` [caniuse](http://caniuse.com/#search=flexbox)
 解决方法: [postcss-flexibility](https://github.com/7rulnik/postcss-flexibility)
 ```javascript
 // webpack配置
 postcss: () => {
   require('postcss-flexibility'),
 }
 ```

* ie8不兼容 `calc` [caniuse](http://caniuse.com/#search=calc) 
 解决方法: [calc-polyfill](https://github.com/closingtag/calc-polyfill)
 注： 直接 `import calc-polyfill` 会报错，不知道为什么。所以要将其作为入口文件之一，通过 `HtmlWebpackPlugin` 将其引入各个页面
 ```
 entry: {
   calcPolyfill: [your_local_path]/calc-polyfill/calc.min.js,
 },
 ```
 
* ie8只兼容`css-gencontent`单冒号写法，如 `:before & :after` [caniuse](http://caniuse.com/#search=css-gencontent) 
 解决方法: [postcss-pseudoelements](https://github.com/axa-ch/postcss-pseudoelements)
 ```javascript
 // webpack配置
 postcss: () => {
   require('postcss-pseudoelements'),
 }
 ```

* ie8不兼容`css3-colors`，如 `rgba() & hsla()` [caniuse](http://caniuse.com/#search=css3-colors)
 解决方法: [postcss-color-rgba-fallback](https://github.com/postcss/postcss-color-rgba-fallback)
 ```javascript
 // webpack配置
 postcss: () => {
   require('postcss-color-rgba-fallback'),
 }
 ```
 
* ie8不完全兼容`opacity` [caniuse](http://caniuse.com/#search=opacity)
 解决方法: [postcss-opacity](https://github.com/iamvdo/postcss-opacity)
 ```javascript
 // webpack配置
 postcss: () => {
   require('postcss-opacity'),
 }
 ```
 
* ie不兼容`will-change` [caniuse](http://caniuse.com/#search=will-change)
 解决方法: [postcss-will-change](https://github.com/postcss/postcss-will-change)
 ```javascript
 // webpack配置
 postcss: () => {
   require('postcss-will-change'),
 }
 ```
 
## Js
...
