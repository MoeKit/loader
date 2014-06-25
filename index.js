var $ = require('jquery');
var Overlay = require('arale-overlay');

function loader(option) {
    require('./loader.css');
    var _this = this;
    var o = {
        number: 4,//bars numbers
        speed: 100,
        style: {
            width: '8px',
            height: '4px',
            backgroundColor: '#CCC',
            activeBackgroundColor: '#EA578C'
        },
        align: {
            selfXY: ['50%', '50%'],
            baseElement: option.target,
            baseXY: ['50%', '50%']
        }
    }
    $.extend(o, option);
    var barsHtml = new Array(o.number).join('<i></i>');
    this.overlay = new Overlay({
        template: '<span class="mk-loading"><i class="mk-loading-active"></i>' + barsHtml + '</span>',
        align: o.align
    });

    var $loading = this.overlay.element;
    var $items = $loading.find('i');
    var length = $items.length;
    var playInterval = setInterval(function () {
        var $active = $loading.find('.mk-loading-active');
        var thisone = $active.index() + 1;
        var lastone = thisone - 1;
        if (thisone === 0) {
            thisone = 0;
            lastone = length - 1;
        }
        $items.eq(lastone).removeClass('mk-loading-active').end().eq(thisone).addClass('mk-loading-active');
    }, o.speed);
}

loader.prototype.show = function () {
    this.overlay.show();
};

loader.prototype.hide = function () {
    this.overlay.hide();
}

module.exports = loader;

