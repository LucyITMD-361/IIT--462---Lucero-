function max(){
  var arrayOfNum = [1, 20, 30, 4, 5, 6, 22, 27, 10, 9];
  var highestNum = 0;
  for(var i = 0; i < arrayOfNum.length; i++){
    if (arrayOfNum[i] > highestNum){
      highestNum = arrayOfNum[i];
    }
  }
  console.log(highestNum);
}
max();
