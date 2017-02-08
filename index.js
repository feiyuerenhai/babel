import {A, B} from './compo.jsx';
console.log('运行成功', A, B);
//babel-node index.js --presets es2015,stage-2;
//对于ES7才支持的import关键字，请使用babel-node加preset集运行
//不仅如此，babel默认支持编译jsx文件，啊哈~

//* 关于Babel *
//babel总是能将ES6语法转换为ES5语法
//请注意转换的只是语法，比如class A; let [a, b]; ()=>{};
//比如将import转换为require
//而不包含新的API，比如Promise、Generator、Symbol等
//这时需要使用babel-polyfill作垫片，垫片的原理就是该垫片会构造出Promise、Proxy对象，以及module.import和require方法等
//放置在node环境中或window环境中，node中babel-node会自动引用垫片polyfill，而在window环境中，我们要手动引入polyfill.js
//另外，要让babel识别node中没有的更高级的ES6甚至ES7预发，就要为babel设置能力预设
//总之，babel是一个转码器，配套预设es2015和stage-2能使它识别ES6甚至更高ES7的高级语法，这些语法都被最终降级翻译为了ES5语法
//presets就是预设，赋予babel更高级别的ES认知能力
//利用插件plugins还能将代码进行一些其他转换，比如转换为AMD模块
// require('babel-polyfill'); babel-node会自动引入
var Babel = require('babel-core');
var code = 
"import React from './compo.jsx';" + 
"class Person{constructor(){}};" +
"let a = {}; a[Symbol('a')]=1;" +
"let [x, y] = [1, 2];" +
"var s = 'hello'; `this is ${s}`";
//在命令行中使用babel时需要.babelrc配置文件
//或者手动配置如下
console.log(Babel.transform(code, {'presets':['es2015','stage-2'], "plugins": ["transform-es2015-modules-amd"] }).code+'\n')

//babel的知识点主要就包含这几部分内容，1，babel cli，2，babel programmatically，3，babel-polyfill，4，browser.js
//babel主要的工作就是编译ES6+语法，包括jsx

//所以，从这个角度反观其他的编码器，比如webpack，它本质就是利用正则规则分析入口文件
//识别某个js文件里的关键字，比如遇到require就会额外分析参数，如果包含.css文件
//就会使用css-loader转换为一个function模块，只不过该模块最终返回了一个cssText
//得到所有的cssText之后再拼到页面中

//* 关于browserify **
//Browserify只负责将commonJS的Node代码转换为浏览器能识别的模块打包，至于代码内容不作任何转换
//换句话说，它只解决了require与module.exports这类关键字标识的模块关系
var browserify = require('browserify');
var b = browserify();
b.add('./brs.js');
b.bundle().pipe(process.stdout);