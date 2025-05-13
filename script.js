let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara =document.querySelector("#user-score");
const comscorepara =document.querySelector("#com-score");

const gencomchoice=()=>{
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3) 
    return options[randIdx];
}

    const DrawGame = () =>{
        msg.innerText="Game Draw!";
        msg.style.backgroundColor="#081b31";
    }
    const showWinner=(userwin,comchoice,userchoice)=>{
        if(userwin){
            userScore++;
            userscorepara.innerText=userScore;
            msg.innerText='You Win!';
            msg.style.backgroundColor="green";
        }else{
            comScore++;
            comscorepara.innerText=comScore;
            msg.innerText='You Lose!';
            msg.style.backgroundColor="red";
        }
    };
const playGame=(userchoice)=>{
    console.log("userchoice = ", userchoice);
    //computer choice
    const comchoice = gencomchoice();
    console.log("comchoice = ", comchoice);

    if(userchoice===comchoice){
        //Draw game
        DrawGame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin = comchoice === "paper" ? false:true;
    } else if(userchoice==="paper"){
         userwin = comchoice ==="scissors" ? false:true;
    }else{
        userwin = comchoice === "rock" ? false:true;
    }
    showWinner(userwin,comchoice,userchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});