const hearts = document.getElementsByClassName("heartCount");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    
    let countElement = document.getElementById("CHeard");
    let count = parseInt(countElement.innerText);
    count++;   
    countElement.innerText = count;
  });
}

// Get all buttons with class "callsCount"
const calls = document.getElementsByClassName("callsCount");



// Loop through all of them
for (let i = 0; i < calls.length; i++) {
  calls[i].addEventListener("click", function () {
    // Go up to the card that contains this button
    const parentCard = this.parentNode.parentNode.parentNode;

    // Find the title and number inside that card
    const title = parentCard.getElementsByClassName("NE_title")[0].innerText;
    const number = parentCard.getElementsByClassName("NE_number")[0].innerText;
    

    //get the coin
    let coins= document.getElementById("coinN");
    //update the coin
    let Fcoint=parseInt(coins.innerText);
    Fcoint=Fcoint-20;
    if(Fcoint>0){
    coins.innerText=Fcoint;
    }else{
       alert("No coin left");
       return;
    }

    // Show them in an alert
    alert(title + " \n " + number);
  });
}
// document.getElementById("history_parent").style.display = "none";
document.getElementById("netionalEmer_history").style.display = "none";
document.getElementById("police_history").style.display = "none";
document.getElementById("fireServ_history").style.display = "none";
document.getElementById("ambulance_history").style.display = "none";
document.getElementById("women_history").style.display = "none";
document.getElementById("anti_corruption_history").style.display = "none";
document.getElementById("electricity_history").style.display = "none";
document.getElementById("brac_history").style.display = "none";
document.getElementById("railway_history").style.display = "none";
document.getElementById("railway_history").style.display = "flex";
// Hide all history sections


