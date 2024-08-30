// const { use } = require("react");

var msg1=document.getElementById("message1");
var msg2=document.getElementById("message2");
var msg3=document.getElementById("message3");
console.log(msg1,msg2,msg3);

var answer= Math.floor(Math.random()*100 )+1 ;
var no_of_guesses =0;
var guessed_nums =[];

function play(){
    var user_gues =document.getElementById("guess").value ;
    if(user_gues <1 || user_gues >100 )
        alert("please enter the number between 1 and  100 ");
    else guessed_nums.push  (user_gues)
    no_of_guesses+= 1;

    if (user_gues<answer) {
        msg1.textContent= "your guess is too low ";
        msg2.textContent=" No. of guesses :" + no_of_guesses;
        msg3.textContent="Guessed number are " + guessed_nums;
    }  
    else if(user_gues> answer) {
        msg1.textContent= "your guess is too High  ";
        msg2.textContent=" No. of guesses :" + no_of_guesses;
        msg3.textContent="Guessed number are" + guessed_nums;
    }
    else if(user_gues== answer){
        msg1.textContent="yeahhhh you win !!"
        msg2.textContent= "your number was :" + answer;
        msg3.textContent= "you guessed it in  "+ no_of_guesses + "guesses "

            document.getElementById("my_btn").disabled= true;
            
    }
}