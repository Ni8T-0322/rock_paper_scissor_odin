console.log("welcome to the rock paper scissor game!")
let humanscore=0, compscore=0;


function getHumanChoice(){
    let choice=prompt("Enter your move, is it : \n Rock \n Paper\n Scissor.")
    choice=choice.toLowerCase()
    if (choice!="rock" && choice!="paper" && choice!="scissor"){
        console.log("invalid input");
        
    }
    else{
        console.log("you choose '"+choice+" '")
        return choice;
    }
}




function getComputerChoice(){
    let choice = Math.random()
 
    let result
    if (choice<0.33){
        result="scissor";
    }
    else if (choice>0.66){
        result="paper";
    }
    else{
        result="rock";
    }
    result=result.toLowerCase()
    console.log("the computer shows '"+ result+"'");
    return result
    
}

function playround(compchoice,humchoice){
    let result=0
    if 
    (   (compchoice=="rock" && humchoice=="paper") ||
        (compchoice=="paper" && humchoice=="scissor")||
        (compchoice=="scissor" && humchoice=="rock")
    )
    {
        console.log("You WON! "+humchoice+" beats "+compchoice)
        result=1;

    }
    else if 
    (   (humchoice=="rock" && compchoice=="paper") ||
        (humchoice=="paper" && compchoice=="scissor")||
        (humchoice=="scissor" && compchoice=="rock")
    ){
         console.log("You LOST!! "+humchoice+" beats "+compchoice)   
         result=-1;

    }
    else if (humchoice==compchoice){
        console.log("DRAW! no one wins!")
    }
    return result;
}


    let i=0,j=0 ;
   
    
    do{
        let humchoice=getHumanChoice();
        let compchoice= getComputerChoice();
        let score=playround(compchoice,humchoice);
        

         if (score==1){
        humanscore+=1
         i=humanscore;
         }
        else if(score==-1){
        compscore+=1;
         j=compscore;
        }
        console.table([
            {player:"human",score:i},
            {player:"computer",score:j}
        ]


        );
        
    }while ((i<5)&&(j<5))
 if (i===5){
    alert("You win Against Computer!! \nScoreCard \n "+i+"--"+j)
 }
 else {
    alert("You lost Against Computer!! \nScoreCard \n "+i+"--"+j)
 }