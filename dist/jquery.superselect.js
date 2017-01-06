/*
1、引用类型问题用$.extend([],obj1,obj2)解决
2、事件代理问题用$.proxy(function,this)解决
*/
;(function($, window, document,undefined) {
    var SuperSelect = function(ele, opt) {
        this.$element = $(ele),
        this.defaults = {
            data: []
        },
        this.options = $.extend({}, this.defaults, opt);
    }
    //方法
    SuperSelect.prototype = {
      //---------------------------------------私有方法--------------------------------------
      //---------------------------------------公有方法--------------------------------------
    }

    $.fn.superselect = function(options) {
        var superselect = new SuperSelect(this, options);
        return superselect._init();
    }
})(jQuery, window, document);
