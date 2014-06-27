var $ = require('jquery'),
    Overlay = require('arale-overlay');

function loader(option) {
    require('./loader.css');
    var _this = this,
        o = {
            number: 4,//bars numbers
            speed: 100,
            style: {
                width: '8px',
                height: '4px',
                backgroundColor: '#CCC',
                activeBackgroundColor: '#EA578C'
            }
        };
    $.extend(o, option);
    var barsHtml = new Array(o.number).join('<i></i>');
    this.overlay = new Overlay({
        template: '<span class="mk-loading"><i class="mk-loading-active"></i>' + barsHtml + '</span>',
        align: o.align,
        align: {
            selfXY: ['50%', '50%'],
            baseElement: option.target,
            baseXY: ['50%', '50%']
        }
    });

    var $loading = this.overlay.element,
        $items = $loading.find('i'),
        length = $items.length;
    var playInterval = setInterval(function () {
        var $active = $loading.find('.mk-loading-active'),
            thisone = $active.index() + 1,
            lastone = thisone - 1;
        if (thisone === 0) {
            thisone = 0;
            lastone = length - 1;
        }
        $items.eq(lastone).removeClass('mk-loading-active').end().eq(thisone).addClass('mk-loading-active');
    }, o.speed);
}

loader.prototype.show = function () {
    this.overlay.show();
    return this;
};

loader.prototype.hide = function () {
    this.overlay.hide();
    return this;
}

module.exports = loader;

