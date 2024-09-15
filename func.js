var arr = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png",]
dice();
function dice(){
    var p1 = Math.ceil(Math.random()*6);
    var p1_index = p1-1;
    var p2 = Math.ceil(Math.random()*6);    
    var p2_index = p2-1;

    if(p1>p2){
        document.querySelector("#title").innerHTML = "Player 1 won";
        document.querySelector("#invisible").setAttribute("id","flag_left");
    }
    else if(p2>p1){
        document.querySelector("#title").innerHTML = "Player 2 won";
        document.querySelector("#invisible").setAttribute("id","flag_right");
    }
    else{
        document.querySelector("#title").innerHTML = "tie game";
        document.querySelector("#invisible").setAttribute("id","invisible");
    }

    document.querySelector("#player1").setAttribute("src",arr[p1_index]);
    document.querySelector("#player2").setAttribute("src",arr[p2_index]);

    console.log(p1 + " " + p1_index + " " + arr[p1_index]);
}