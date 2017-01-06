/*
1、引用类型问题用$.extend([],obj1,obj2)解决
2、事件代理问题用$.proxy(function,this)解决
3、注意：autoSelect和autoSelectFromUrl如果都设置成true，优先autoSelectFromUrl
*/
;(function($, window, document,undefined) {
    var SuperSelect = function(element, options) {
        this.$element = $(element),
        this.defaults = {
            //---------------------------------------属性--------------------------------------
            placeholder: '-请选择-',
            validate: false,
            data: [],
            url:'',
            onChange: function(){

            },
            onLoadSuccess:function(){

            },
            onLoadError: function(){

            }
        },
        this.options = $.extend({}, this.defaults, options);
    }
    //方法
    SuperSelect.prototype = {
      //---------------------------------------私有方法--------------------------------------
      _init: function(){
        var self = this;
        self._event();
        if(self.options.url){
          self._ajaxLoadData();
        }
        else{
          self._output();
        }
      },
      _ajaxLoadData: function(){
        var self = this;
        var url = self.options.url;
        $.ajax({
                url: url,
                dataType: 'jsonp',
                success: function(data){
                    var items = $.map(data, function(value,text){
                        return {
                            value: value,
                            text: text
                        };
                    });
                    self.options.data = items;
                    self._output();
                    $.proxy(self.options.onLoadSuccess, self)();
                },
                error: function(e,s){
                  console.log(e.msg)
                  $.proxy(self.options.onLoadError, self)();
                }
            });
      },
      _event: function(){
        var self = this;
        if(self.$element){
          self.$element.on('change.superselect', $.proxy(function(){
            $.proxy(self.options.onChange, self.$element)();
          },self));
        }
      },
      _output: function(){
        var self = this;
        var data = self.options.data;
        data.unshift({
          value: '',
          text: self.options.placeholder
        });

        if(data.length){
          self.$element.html(self._getDomList(data));
        }
        else{
          self.$element.empty();
        }
      },
      _getDomList: function(data){
        var self = this;
        var list = [];

        $.each(data,function(index,object){
          var attrs = [
            'value = "' + object.value + '"'
          ]
          if(object.selected){
            attrs.push('selected')
          }
          list.push('<option '+ attrs.join(' ') + '>'+ object.text +'</option>');
        })
        return list.join('');
      }
      //---------------------------------------公有方法--------------------------------------
    }

    $.fn.superselect = function(options) {
        var superselect = new SuperSelect(this, options);
        return superselect._init();
    }
})(jQuery, window, document);
