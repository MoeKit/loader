var $ = require('jquery'),
    Overlay = require('arale-overlay');

function loader(option) {
    require('./loader.css');
    var _this = this;
    var defaults = {
        number: 4,//bars numbers
        speed: 100,
        style: {
            width: '8px',
            height: '4px',
            backgroundColor: '#CCC',
            activeBackgroundColor: '#EA578C'
        }
    };
    _this.o = {};
    $.extend(_this.o, defaults, option);

    // custom style
    var style = [];
    for (var i in _this.o.style) {
        if (this.o.style[i] !== defaults.style[i]) {
            style.push(i + ':' + this.o.style[i]);
        }
    }
    style = style.join(';').replace('backgroundColor', 'background-color');
    var barsHtml = new Array(_this.o.number).join('<i style="' + style + '"></i>');

    this.overlay = new Overlay({
        template: '<span class="mk-loading"><i class="mk-loading-active" style="' + style + '"></i>' + barsHtml + '</span>',
        align: {
            selfXY: ['50%', '50%'],
            baseElement: option.target,
            baseXY: ['50%', '50%']
        }
    });
    this.play();
    return this;
}

loader.prototype.play = function () {
    var $loading = this.overlay.element,
        $items = $loading.find('i'),
        length = $items.length,
        _this = this;
    setInterval(function () {
        var $active = $loading.find('.mk-loading-active'),
            thisone = $active.index() + 1,
            lastone = thisone - 1;
        if (thisone === 0) {
            thisone = 0;
            lastone = length - 1;
        }
        $items.eq(lastone).removeClass('mk-loading-active').end().eq(thisone).addClass('mk-loading-active');
    }, _this.o.speed);
    return this;
};

loader.prototype.show = function () {
    this.overlay.show();
    return this;
};

loader.prototype.hide = function () {
    this.overlay.hide();
    return this;
}

module.exports = loader;

