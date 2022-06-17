// document.querySelector("form").addEventListener("submit",signupfunction);
// var userData=JSON.parse(localStorage.getItem("userip"))||[];
//console.log(savedata);
function signupfunction(){
   if(document.querySelector("#confirmpassword").value===document.querySelector("#password").value){
    var userobj={
        
        saveemail:document.querySelector("#email").value,
        savepass:document.querySelector("#password").value,
        confimrpass:document.querySelector("#confirmpassword").value,
        check1:document.querySelector("#condition1").value,
        check2:document.querySelector("#condition2").value,
       }
       window.location="./index.html"
   }
   else{
    alert("Enter correct password")
   }
   console.log(userobj);
   userData.push(userobj);
  
//    localStorage.setItem("userip",JSON.stringify(userData))
   //console.log(userData)
}
// var data=JSON.parse(localStorage.getItem("userip"));
// console.log(data) 
