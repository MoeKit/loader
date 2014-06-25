# Demo

---

## Normal usage

````html
<div style="border:1px dashed #ececec;width:200px;height:300px;" id="loader-box"></div>
````

````javascript
seajs.use('index', function(loader) {
    new loader({
        target:'#loader-box',
        number:8
    }).show();
});
````
