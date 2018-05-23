# vue-filters

> 基于vue2的简易filter(date,currency,number,lowercase,uppercase)  
PS:date 基于moment.js开发

## 安装和使用


使用npm安装
``` bash
  npm install vue2-moment-filters --save
```

在main.js中引入并挂载

``` bash
  import Filters from 'vue2-moment-filters'
  Vue.use(Filters,options)
``` 

### options
| key | 类型 | 描述  | 默认值 | 
| :----------- |:------:|:---------------:|:------------:|
| dateFormat   | string | 时间的过滤参数   |  YYYY-MM-DD  |
| symbol       | string | 货币的符号       |  ¥           |
| currencySize | number | 货币保留小数     |  2           |
| numberSize   | number | 保留小数         |  0           |



## Build Setup


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
# vue-filters
