let string="";
let buttons=document.querySelectorAll('.button');
Array.from (buttons).forEach((buttons)=>{
buttons.addEventListener('click',(e)=>{
if(e.target.innerHTML=='='){
    string=eval(string);
 document.querySelector('input').value=string;
// document.getElementsByClassName('input').innerHTML=string;
}

else if(e.target.innerHTML=='C'){
    string="";  
document.querySelector('input').value=string;
}

else{
 string=string+e.target.innerHTML;  
document.querySelector('input').value=string;

}
})   
})

// let float1="";
// let float2="";
// let result;
// let opp;
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>{
// if(e.target.innerHTML=='+'||e.target.innerHTML=='-'||e.target.innerHTML=='*'||e.target.innerHTML=='/'){
//   opp=e.target.innerHTML;
//    document.querySelector('input').value='';
// }
// else if(e.target=='='){
//     float2=float2+e.target.innerHTML;
//     num2=parseInt("float2"); 
//     console.log(num2)
//     parseFloat("float2",float2);
//     switch(opp){
//         case '+':{

//             result=float1+e.target.innerHTML;
//         parseInt("result",result);
//         }
//         case '-':{
//             result=float1-float2;
//         }
//         case '*':{
//             result=float1*float2;
//         }
//         case '/':{
//             result=float1/float2;
//         }
 
//         console.log(result);
         
//     }
// }
// else{
// float1=float1+e.target.innerHTML;
// num1=parseInt("float1");
// console.log(float1);
// console.log(num1);
// document.querySelector('input').value=float1;
// }
//    })
// })