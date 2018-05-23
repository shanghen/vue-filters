function Lowercase(value){
  if(typeof(value) !== 'string') return "NO STRING";
  return value.toLowerCase();
}

function Uppercase(value){
  if(typeof(value) !== 'string') return "NO STRING";
  return value.toUpperCase();
}

export { Lowercase, Uppercase }
