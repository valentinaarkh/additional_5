module.exports = function check(str, bracketsConfig) {
  var config = bracketsConfig;
  var str = str.trim();
  if ((str.length%2) || (str.length == 0)){
    return false;
  }else{
 for (var i = 0; i <  config.length;i++) {
    var param1 = config[i][0];
    var param2 = config[i][1];
    var pos1 = 0;
    var pos2 = 0;
    if(param1==param2){
      pos2 = 1;
    }
    while( (pos1 <= str.length) && (pos2 <= str.length)){
      var foundPos1 = str.indexOf(param1,pos1);
      var foundPos2 = str.indexOf(param2,pos2);
      if (param1 == param2){
        foundPos2 = str.indexOf(param2,foundPos1+1);
      }
      if((foundPos1 == -1) || (foundPos2 == -1)){
              break;
      }
      if (!((foundPos2 - foundPos1)%2) || (foundPos2 - foundPos1) < 0){
              return false;
              break;
          }
          pos1 = foundPos1+1;
          pos2 = foundPos2+1;  
          if(param1==param2){
            pos1 = foundPos2+1;
          }
      } 
    }
     return true;
	}
}
