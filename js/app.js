'use strict';

let score = 0;
//Q1
let uName=prompt('please enter your name');


alert("welcome to my page "+uName+" please answer these yes/no  Q and Enjoy getting to know me");

function question1 (){
  let Q1=prompt ('Is my name Wijdan Khaled?');
switch(Q1.toUpperCase()){ 
case 'YES' : alert('yes , my name is wijdan now you know my name');
score++;
break;    
case'NO':alert ('no ,it is');   
 
break;    
default:    
    
alert('please tray again');}
}
question1();

//Q2
function question2 (){
let Q2=prompt ('my age is older than 22');
switch(Q2.toUpperCase()){ 
case 'YES' :
alert('yes , my age is 22');
break;    
case'NO':
alert ('no ,it is 22'); 
score++; 
break;    
default:    
  
alert('please tray again');}
}
question2();

//Q3
function question3 (){
let Q3=prompt ('Do you think I am addicted to coffee');
switch(Q3.toUpperCase()){ 
case 'YES' :
alert('yes , I am addicted to coffee ');
score++;
break;    
case'NO':
alert ('no ,actully  I am addicted to coffee' );  
break;    
default:       
alert('please tray again');}
}
question3();

//Q4
function question4 (){
let Q4=prompt ('is my cate name cady?');
switch(Q4.toUpperCase()){ 
case 'YES' :
alert('yes , my cat name is cady ');
score++;
break;    
case'NO': 
alert ('no ,actully  my cat name is cady' );  
break;    
default:    
    
alert('please tray again');}
}
question4();

//Q5
function question5 (){
let Q5=prompt ('do i speake spansh?');
switch(Q5.toUpperCase()){ 
case 'YES' :
alert('yes ,i do speak spansh ');
score++;
break;    
case'NO':
alert ('no ,actully i learning it now' );  
break;    
default:    
alert('please tray again');}
}
question5();


//Q6


alert("Guess with me, you have 4 attempts to get to the correct answer");
function Qustion6(){
let Q6=prompt ('How many programming languages ​​I tried to learn');

for (let i = 1; i < 4 ; i++) {
if (Q6  == 3){
  alert('you answerd correctly ');
  score++;
  alert ('your score' + score );
  
break;
} else if (Q6 > 3) {
  alert('no , it is too high');
  Q6=  prompt ('guess again' , 'answer with numbers' );
   
} else if (Q6 < 3){
  alert('no , it is too low');
  Q6=  prompt ('guess again' , 'answer with numbers' );

}

}

alert ('you finish your attemped the answer is 3 ');

}
Qustion6();

function questionSeven() {
  let favmovie = ['it', 'platforme', 'blacke list', 'anne', 'me before you'];

  for (let i = 0; i < 6; i++) {
      let userAnsw = prompt('Can you guess my favorite movie?');
      userAnsw.toLowerCase();

      for (var j = 0; j < favmovie.length; j++){
          if ( userAnsw === favmovie[j]) {
              alert('correct answer');
              score++;
              alert ('your score' + score );
              
              i = 6;
              break;
          }
      }
      if (i !==6){
          alert('Sorry wrong answer, try again');
      }
    
  }
  

}

questionSeven();
alert('my favert movies are'+favmovi);

alert(' You got ' + score + ' correct answers!');