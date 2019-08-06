
//var i;
function myInfo(){
  var name=document.getElementById("username").value;
  console.log(name);
  var pass=document.getElementById("password").value;
  console.log(pass);
  //for(i=0;i<=people.length;i++){
      if((name !== "rwakaemma34@gmail.com") || (pass !== "codewars")){
        alert("incorrect email or password");
      }
      else{
        alert(name +" " + "logged in");
      }
  }

function myNew(){
  var first=document.getElementById("name1").value;
  console.log(first);
  var last=document.getElementById("name2").value;
  console.log(last);
  var mail=document.getElementById("maile").value;
  console.log(mail);
  var word=document.getElementById("passy").value;
  console.log(word);
  var confirm=document.getElementById("word").value;
  console.log(confirm);

  if((first !== "Clark")||(last !== "Uwera")||(mail !== "uwacla@gmail.com")||(word !== "gowell")||(confirm !== "gowell")){
    alert("incorrect input");
  }
   else{
     alert(first +" " +"Welcome to Paintings Genics");
   }
}