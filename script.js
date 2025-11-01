const hearts = document.getElementsByClassName("heartCount");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    
    let countElement = document.getElementById("CHeard");
    let count = parseInt(countElement.innerText);
    count++;   
    countElement.innerText = count;
  });
}
const calls = document.getElementsByClassName("callsCount");

for (let i = 0; i < calls.length; i++) {
  calls[i].addEventListener("click", function () {
    const title = calls[i].getElementsByClassName("NE_title")[0].innerText;
    const number = calls[i].getElementsByClassName("NE_number")[0].innerText;
    alert(title + " " + number);


  });
}
