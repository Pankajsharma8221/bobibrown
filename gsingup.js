

document.querySelector("#btnsign").addEventListener("click",emailSign);
var mail=document.getElementById("eemail").value;
var error=document.getElementById("error");
function emailSign()
{
    if(document.getElementById("eemail").value==null ||  document.getElementById("eemail").value==''){
      error.style.display="block";

    }
    else{
        window.location.href="gsignin.html";
    }
  
    // window.location.href="gsignin.html";
}
   


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
    

