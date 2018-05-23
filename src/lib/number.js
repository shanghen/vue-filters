
function formatNumber(number, size) {
  /*
   * 参数说明：
   * number：要格式化的数字
   * size：保留几位小数
   * */
  number = parseFloat((number + "").replace(/[^\d\.-]/g, "")).toFixed(size) + "";
  var left = number.split(".")[0].split("").reverse(),
      right = number.split(".")[1];
  var text = "";
  for (var i = 0; i < left.length; i++) {
    text += left[i] + ((i + 1) % 3 == 0 && (i + 1) != left.length ? "," : "");
  }
  if(right){
    return text.split("").reverse().join("") + "." + right;
  }else{
    return text.split("").reverse().join("");
  }
  
}  


function Currency(options){
  return function(value,symbol,size){
    symbol = symbol || options.symbol;
    size = size || options.currencySize;
    return symbol + formatNumber(value,size);
  }
}

function Number(options){
  return function(value,size){
    size = size || options.numberSize;
    return formatNumber(value,size);
  }
}

export { Currency, Number }