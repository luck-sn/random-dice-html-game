function checkifRefreshed()
{
    const perfEntries = performance.getEntriesByType("navigation");
    if(perfEntries[0].type=='reload') 
    return randomDice();
}


function randomDice()
{
    let dice1=(Math.floor(Math.random()*6)+1);
    let dice2=(Math.floor(Math.random()*6)+1);
    document.getElementsByClassName("img1")[0].src="./images/dice"+dice1+".png";
    document.getElementsByClassName("img2")[0].src="./images/dice"+dice2+".png";

    let msg="Draw"
    if(dice1>dice2)
    {
        msg="Player 1 Won"
    }
    else if(dice2>dice1)
    {
        msg="Player 2 Won"
    }
    document.getElementsByTagName("h1")[0].innerHTML=msg;
}