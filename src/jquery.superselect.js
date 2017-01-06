/*
1、引用类型问题用$.extend([],obj1,obj2)解决
2、事件代理问题用$.proxy(function,this)解决
3、注意：autoSelect和autoSelectFromUrl如果都设置成true，优先autoSelectFromUrl
*/
;(function($, window, document,undefined) {
    var SuperSelect = function(ele, opt) {
        this.$element = $(ele),
        this.defaults = {
            //---------------------------------------属性--------------------------------------
            //设置从url里获取的参数
            autoSelectFromUrl: false,
            selectFromUrl:{
              province_param: 'province',
              city_param: 'city',
              district_param: 'district',
            },
        },
        this.options = $.extend({}, this.defaults, opt),
        //设置配置好的中国地理位置区域数据
        this.citydata = $.chinaLocationData;
        //保存当前选中的省市区数据，后面的数据都是从这里取，第一次还是从this.citydata里面获取数据
        this.pcd ={
          'provinces' : [],
          'citys' : [],
          'districts' : []
        }
    }
    //方法
    SuperSelect.prototype = {
      //---------------------------------------私有方法--------------------------------------

    }

    $.fn.superselect = function(options) {
        var superselect = new SuperSelect(this, options);
        return superselect._init();
    }
})(jQuery, window, document);
