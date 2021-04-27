'use strict';

 
//Q1
let uName=prompt('please enter your name');


alert("welcome to my page "+uName+" please answer these yes/no y/n Q and Enjoy getting to know me");
let Q1=prompt ('Is my name Wijdan Khaled?');
switch(Q1.toUpperCase()){ 
case 'YES' :console.log ('yes , my name is wijdan'); 
case 'Y':console.log ('yes ,my name is wijdan'); 
alert('yes , my name is wijdan now you know my name');
break;    
case'NO':console.log('no , it is not');  
case 'N':console.log ('no , no it is not'); 
alert ('no ,it is');  
break;    
default:    
console.log('plz ask me agin');    
alert('plz ask me agin');}

//Q2
let Q2=prompt ('my age is older than 22');
switch(Q2.toUpperCase()){ 
case 'YES' :console.log ('yes , my age is 22'); 
case 'Y':console.log ('yes ,my age is 22'); 
alert('yes , my age is 22');
break;    
case'NO':console.log('no , it is not');  
case 'N':console.log ('no , no it is not'); 
alert ('no ,it is 22');  
break;    
default:    
console.log('plz ask me agin');    
alert('plz ask me agin');}

//Q3
let Q3=prompt ('Do you think I am addicted to coffee');
switch(Q3.toUpperCase()){ 
case 'YES' :console.log ('yes , am i'); 
case 'Y':console.log ('yes ,am i'); 
alert('yes , I am addicted to coffee ');
break;    
case'NO':console.log('no , iam not');  
case 'N':console.log ('no , iam not'); 
alert ('no ,actully  I am addicted to coffee' );  
break;    
default:    
console.log('plz ask me agin');    
alert('plz ask me agin');}

//Q4
let Q4=prompt ('is my cate name cady?');
switch(Q4.toUpperCase()){ 
case 'YES' :console.log ('yes , it is'); 
case 'Y':console.log ('yes ,it is'); 
alert('yes , my cat name is cady ');
break;    
case'NO':console.log('no , it is not');  
case 'N':console.log ('no ,it is not'); 
alert ('no ,actully  my cat name is cady' );  
break;    
default:    
console.log('plz ask me agin');    
alert('plz ask me agin');}

//Q5
let Q5=prompt ('do i speake spansh?');
switch(Q5.toUpperCase()){ 
case 'YES' :console.log ('yes , i do'); 
case 'Y':console.log ('yes ,i do'); 
alert('yes ,i do speak spansh ');
break;    
case'NO':console.log('no , i dont');  
case 'N':console.log ('no ,i dont'); 
alert ('no ,actully i learning it now' );  
break;    
default:    
console.log('plz ask me agin');    
alert('plz ask me agin');}
/*
//Q6
alert("Guess with me, you have 4 attempts to get to the correct answer");
let Q6=prompt ('How many programming languages ​​I tried to learn');
Number(Q6);
for(let i=1;i<=4;i++){
  if (Q6 === 3)
{
  
  alert("you got the correct answer");
}
else if(Q6>3) {
  alert("your answer is too high");
  alert("please try agan");
break;

}
else if(Q6 < 3){
  alert("your answer is too low");
}
}*/