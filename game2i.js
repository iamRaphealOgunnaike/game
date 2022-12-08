let computerChoice = document.getElementById('computer-choice')
let  Rock = document.getElementById('rock')
let Paper = document.getElementById('paper')
let Scissors = document.getElementById('scissors')

Rock.onclick=()=>{
  
    document.getElementById('user-choice').innerHTML= 'Rock'
}
Paper.onclick=()=>{
    document.getElementById('user-choice').innerHTML= 'Paper'
}
Scissors.onclick=()=>{
    document.getElementById('user-choice').innerHTML= 'Scissors'
}

document.getElementById('submit').onclick=()=>{
  
    
   compApp  = Math.floor(Math.random()*3+1)
    if(compApp == 1){
        computerChoice.innerHTML='Rock'
    }else if(compApp == 2){
        computerChoice.innerHTML='Paper'
    }else if(compApp == 3){
        computerChoice.innerHTML='Scissors'
    }
    else{
        computerChoice.innerHTML='You have not picked anything'
    }
    
    Rock = 1;
     Rock = document.getElementById('user-choice');
    Paper = 2;
    Paper = document.getElementById('user-choice');
    Scissors = 3;
    Scissors = document.getElementById('user-choice');

    if(compApp == 1 &&  Rock ||compApp == 2 && Paper
        // ||compApp == 3 && Scissors
        ){
        document.getElementById('result').innerHTML="You win"
    }else{
        document.getElementById('result').innerHTML="You lose"
    } 

    


}