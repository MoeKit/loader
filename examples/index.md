# Demo

---

## 一般使用

````html
<div style="border:1px dashed #ececec;width:200px;height:100px;" id="loader-box"></div>
````

````javascript
seajs.use('index', function(loader) {
    new loader({
        target:'#loader-box'
    }).show();
});
````

## 按钮上使用

````html
<button style="width:100px;height:30px;" id="loader-button" disabled></button>
````

````javascript
seajs.use('index', function(loader) {
    new loader({
        target:'#loader-button',
        number: 5
    }).show();
});
````

## 个数设定

````html
<div style="border:1px dashed #ececec;width:200px;height:100px;" id="loader-box-2"></div>
````

````javascript
seajs.use('index', function(loader) {
    new loader({
        target:'#loader-box-2',
        number:8
    }).show();
});
````

## 宽度设定

````html
<div style="border:1px dashed #ececec;width:200px;height:100px;" id="loader-box-3"></div>
````

````javascript
seajs.use('index', function(loader) {
    new loader({
        target:'#loader-box-3',
        number:6,
        style:{
            width:'20px'
        }
    }).show();
});
````

## 速度设定

````html
<div style="border:1px dashed #ececec;width:200px;height:100px;" id="loader-box-6"></div>
````

````javascript
seajs.use('index', function(loader) {
    new loader({
        target:'#loader-box-6',
        number:8,
        speed: 300,
        style: {
            width: '15px'
        }
    }).show();
});
````

## 高度设定

````html
<div style="border:1px dashed #ececec;width:200px;height:100px;" id="loader-box-4"></div>
````

````javascript
seajs.use('index', function(loader) {
    new loader({
        target:'#loader-box-4',
        number:6,
        style:{
            width:'20px',
            height:'10px'
        }
    }).show();
});
````