document.querySelector("#form1").addEventListener("submit", signupdata);
var m = form1.Nemail.value;
function myFunction() {
  var x = document.getElementById("Npass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

var userdataArr = JSON.parse(localStorage.getItem("userData")) || [];

var err = document.getElementById("error");

var err1 = document.getElementById("error1");
function signupdata() {
  event.preventDefault();

  if (
    document.getElementById("Nemail").value == null ||
    document.getElementById("Nemail").value == ""
  ) {
    err.style.display = "block";
  }
  if (
    document.getElementById("Npass").value == null ||
    document.getElementById("Npass").value == ""
  ) {
    err1.style.display = "block";
  } else {
    var userdataObj = {
      signEmail: form1.Nemail.value,

      signPass: form1.Npass.value,
    };
    userdataArr.push(userdataObj);
    console.log(userdataArr);
    localStorage.setItem("userData", JSON.stringify(userdataArr));
      window.location.href = "index.html";
    
   
  }
}

var loginUser= JSON.parse(localStorage.getItem("loginData"))||[];
document.querySelector("#signinbtn").addEventListener("click", checkuser);
function checkuser() {

  var err2 = document.getElementById("error3");
  var err3 = document.getElementById("error4");
  var usermail = document.getElementById("userEmail").value;
  var userpass = document.getElementById("userPass").value;
  var data = JSON.parse(localStorage.getItem("userData")) || [];
  if (usermail == null || usermail == "") {
    err2.style.display = "block";
  }
  if (userpass == null || userpass == "") {
    err3.style.display = "block";
  } else {
 
    var flag = false;
    
    data.forEach((ele) => {
      if (usermail == ele.signEmail && userpass == ele.signPass) {
      
        console.log(ele.signEmail,ele.signPass);
        var user = {
           usermail,
           userpass,
        };
       loginUser.push(user);
       console.log(user)
       var xyz=["allow"];
       localStorage.setItem("accdata",JSON.stringify(xyz));
        localStorage.setItem("loginData", JSON.stringify(loginUser));
    

  
        flag = true;
      }
    });
    if (!flag) {
      var xyz=[];
      localStorage.setItem("accdata",JSON.stringify(xyz));
      alert("please check Your Gmail or Password are correct!");
    } else {
      window.location.href = "index.html";
    }
  }
}


// floting navbar
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