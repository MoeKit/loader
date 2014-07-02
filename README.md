# loader

---

[![spm version](http://spmjs.io/badge/loader)](http://spmjs.io/package/loader)
[![Build Status](http://img.shields.io/travis/MoeKit/loader.svg)](https://travis-ci.org/MoeKit/loader)
[![Coverage Status](http://img.shields.io/coveralls/MoeKit/loader.svg)](https://coveralls.io/r/MoeKit/loader)

简单的加载提示

---


## Usage

```js
var loader = require('loader');
new loader({
   target:'#loader-box',
   number: 4,
   speed: 100
}).show();
```

## 选项

### target
目标容器

### number
加载bar的数量

### speed
速度，单位为ms

### style.width
单个bar宽度

### style.height
单个bar高度

## 方法

### show
显示加载条

### hide
隐藏加载条



