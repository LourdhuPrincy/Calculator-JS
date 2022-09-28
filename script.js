const input=document.querySelector('.textview');
 input.value="";

function insert(num){
 input.value+=num;
 return input.value;
}
// eval()=>will perform the operation passed inside '()';
function equals(){
    let value=input.value;
    let ans=eval(value);
    input.value=ans;
}
function clean(){
  input.value="";
}
function back(){
  let valDel=input.value;
 let newVal= valDel.replace(valDel[valDel.length-1], "");
 input.value=newVal;
}