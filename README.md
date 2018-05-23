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

设定默认只是为了在使用filter可以尽量不用传参




## date
``` bash
  {{ date_expression | date(format)}}
```
| 参数 | 类型 | 描述  |
| :----------- |:------:|:---------------:|
| date         | string  number | 日期格式的字符串或者时间戳(毫秒)   |
| format       | string | [参数详情参看moment.js](http://momentjs.cn/docs/#/parsing/) |

## currency
``` bash
  {{ amount  | currency(symbol,size)}}
```
| 参数 | 类型 | 描述  |
| :----------- |:------:|:---------------:|
| amount       | number | 货币的值   |
| symbol       | string | 货币的符号 |
| size         | number | 省略小数位数 |

## number
``` bash
  {{ number  | number(size)}}
```
| 参数 | 类型 | 描述  |
| :----------- |:------:|:---------------:|
| number       | number | 值          |
| size         | number | 省略小数位数 |

## lowercase
``` bash
  {{ string  | lowercase }}  
  {{ string  | uppercase }}  
```
| 参数 | 类型 | 描述  |
| :----------- |:------:|:---------------:|
| string       | string | 值          |


# vue-filters
