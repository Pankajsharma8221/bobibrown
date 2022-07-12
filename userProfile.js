document.getElementById("order").addEventListener("click",order);
function order(){
    window.location.href="Ncart.html";
}

document.getElementById("address").addEventListener("click",address);
function address(){
    window.location.href="Ncart.html";
}

document.getElementById("payment").addEventListener("click",payment);
function payment(){
    window.location.href="Ncart.html";
};



var usermail=document.getElementsByClassName("usermail")
var mail=JSON.parse(localStorage.getItem("loginData"));
var index=mail.length-(mail.length-1);
console.log(index);
var usermail=mail[index]["loginEmail"];
console.log(usermail)
usermail.innertext=usermail;

console.log(usermail.innertext);

const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 336) {
      document.querySelector(".section").style.display = "flex";
      document.querySelector(".section").style.position = "sticky";
      document.querySelector(".section").style.top = "0";
      document.querySelector(".section").style.zIndex = "200";
    } else {
      document.querySelector(".section").style.display = "none";
    }
  });