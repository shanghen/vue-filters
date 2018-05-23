import moment from 'moment';

export default function (options){
  return function (value,format){
    var format = format || options.dateFormat;
    var text = moment(value);
    if(text.isValid()){
      return text.format(format);
    }else{
      return 'Invalid Date'
    }
  }
}