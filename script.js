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
document.getElementById("netionalEmer_history").style.display="none";

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
    if(Fcoint>=0){
    coins.innerText=Fcoint;
    }else{
       alert("No coin left");
       return;
    }

    // Show them in an alert
    alert(title + " \n " + number);
  
  
  //history section update
  const historyParent = document.getElementById("history_parent");

  // Create a new div for this call history
    const newHistory = document.createElement("div");
    newHistory.className = "bg-[#FAFAFA] w-full rounded-lg h-[83px] p-4 mb-4 flex justify-between items-center";

    // Add title + number
    const leftDiv = document.createElement("div");
    leftDiv.innerHTML = `<h1>${title} <br> <span>${number}</span></h1>`;

     // Add time
    const rightDiv = document.createElement("div");
    const now = new Date();
    rightDiv.innerHTML = `<p class="text-[18px] font-bold">${now.toLocaleString()}</p>`;

    newHistory.appendChild(leftDiv);
    newHistory.appendChild(rightDiv);

    // Append new history to the parent
    historyParent.prepend(newHistory); // shows latest on top


});
}

document.getElementById("clear-btn").addEventListener('click',function(){
   const historyP=document.getElementById("history_parent").innerHTML=" ";
})

