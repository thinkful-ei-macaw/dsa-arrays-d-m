const Array = require('./arrays');

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  //   arr.push(45);
  //   arr.push(10);

  //   console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  console.log(arr.get(4));

}

function url(string){
  let newStr = [];
  newStr = string.split('');
  for(let i=0; i < newStr.length;i++){
    if(newStr[i]===' '){
      newStr[i] = '%20';
    }
  }
  return newStr.join('');
}
function filter(arr, num){
  let newArr = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i]<num){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function maxSum(arr){
  let newArr = [];
  let res = 0;
  for(let i = 0; i < arr.length; i++) {
    res += arr[i]; 
    newArr.push(res);
  }
  return Math.max(...newArr);
}
function merge(arr1,arr2){
  return (arr1.concat(arr2)).sort((a, b) => {
    return a-b;
  });
}
function remove(string, chars){
  let newString='';
  for(let i = 0; i < string.length; i++) {
    if(!chars.includes(string[i])) {
      newString += string[i];
    }
  }
  return newString;
}
function productArr(arr) {
  let product = 1;
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  for(let j = 0; j < arr.length; j++) {
    newArr.push(product/arr[j]);
  }
  return newArr;
}
//make two linear passes for 2d array
function twoD(arr){ // i - row, j - col
  let row=[];
  let column=[];
  for(let i =0; i < arr.length;i++){    
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === 0){
        row.push(i);
        column.push(j);
      }
    }
  }
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      if(row.includes(i)||column.includes(j)) {
        arr[i][j] = 0;
      }
    }
  }
  
  return arr;
}

let arr1 = 
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

console.log(twoD(arr1));

function rotation(str1,str2){    
  if(str1.length !== str2.length) 
    return false;
  let temp = str1;
  for(let i = 0; i < str1.length; i++) {
    let firstLetter=temp[0];
    let rest=temp.substr(1);
    temp = rest + firstLetter; // mazon + a -> mazona
    if(temp === str2) 
      return true;
  }
  return false;
}
// console.log(rotation('amazon', 'azonam'));
// console.log(rotation('amazon', 'azonam'));