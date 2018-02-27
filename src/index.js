module.exports = function check(str, bracketsConfig) {
var length = str.length * bracketsConfig.length;
  for(j = 0; j < length; j++){
  for(i = 0; i < bracketsConfig.length; i++){
  var str1 = bracketsConfig[i].join("");
  str = str.replace(str1, "");
  }
  }

  if(str.length > 0){
  return false;
  } else {
  return true;
  }
}
