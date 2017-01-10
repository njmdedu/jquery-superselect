# jquery-superselect

A simple jQuery plugin for select.

## Table of contents

- [Property](#property)
- [Methods](#methods)
- [Events](#events)

## API

### Requirement:

Html:
```
<select id="myselect"></select>
```

Javascript:
```
<script src="https://cdn.bootcss.com/jquery/2.1.0/jquery.min.js"></script>
<script src="./js/jquery.superselect.js"></script>
```

Usage:
```
$('#myselect').superselect();
```

## Property

### placeholder: String

设置默认选中提示字符

### validate: Boolean

默认:false，校验是否已经选择了内容

### data: Array

设置加载到select的数据

```
{
  value : '',
  text : ''
}
```

### url: String

通过设置url从服务器获取data 数据


## Methods

### (Boolean) isSelected

判断是否已经选中值

### (String) getValue

获取已选中的值

## Events

### onChange

当改变时触发事件

### onLoadSuccess

当成功渲染数据成功时触发事件

### onLoadError

当渲染数据失败时触发事件

eg:

```
$('#myselect').superselect({
    onChange:function(){

    },
    onLoadSuccess:function(){

    },
    onLoadError:function(){

    }
});
```
[⬆ back to top](#table-of-contents)
