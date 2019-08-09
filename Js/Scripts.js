
// //var i;
// function myInfo(){
//   var name=document.getElementById("username").value;
//   console.log(name);
//   var pass=document.getElementById("password").value;
//   console.log(pass);
//     //for(i=0;i<=people.length;i++){
//     //       if((name !== "rwakaemma34@gmail.com") || (pass !== "codewars")){
//     //         alert("incorrect email or password");
//     //       }
//     //       else{
//     //         alert(name +" " + "logged in");
//     //       }
//     firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       document.getElementsByName("gallery.html").style.display ="initial";
//       document.getElementsByName("sign.html").style.display ="none";
//     } else {
//       // No user is signed in.
//       document.getElementsByName("gallery.html").style.display ="none";
//       document.getElementsByName("sign.html").style.display ="initial";
//     }
//   });
//     firebase.auth().signInWithEmailAndPassword(name, pass).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         window.alert("Error : " + errorMessage);
//         // ...
//     });
// }

// function myNew(){
//   var first=document.getElementById("name1").value;
//   console.log(first);
//   var last=document.getElementById("name2").value;
//   console.log(last);
//   var mail=document.getElementById("maile").value;
//   console.log(mail);
//   var word=document.getElementById("passy").value;
//   console.log(word);
//   var confirm=document.getElementById("word").value;
//   console.log(confirm);

// //   if((first !== "Clark")||(last !== "Uwera")||(mail !== "uwacla@gmail.com")||(word !== "gowell")||(confirm !== "gowell")){
// //     alert("incorrect input");
// //   }
// //    else{
// //      alert(first +" " +"Welcome to Paintings Genics");
// //    }
// }

$(document).ready(function(){
    // Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		
		let imageInput  = document.getElementById('fil')
		$("#sign").on('click', (evt) => {
			let firstFile = imageInput.files[0] // upload the first file only
			let storageRef = firebase.storage().ref('photos/'+firstFile.name)
			let uploadTask = storageRef.put(firstFile)
				.then(()=>{
					alert("Done uploading")
				})
		})
    $("#sign").click(function(){
      var name1 = $('#name1').val();
      var name2 = $('name2').val();
      var email = $('#username').val();
      var password = $('#password').val();
      var passcode = $('#word').val();
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(val) {
            window.open('gallery.html','_self')
            alert("Done uploading")
            console.log(val);
        })
      .catch(function(error) {
        // Handle Errors here.
        alert("ERROR");
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      }).success(function(json) {
        console.log(json);
            alert("TESTER");
      })
          // [END createwithemail]
        });
});
$(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.profile').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".file").on('change', function(){
        readURL(this);
    });
    
    $("#pick").on('click', function() {
       $(".file").click();
    });
});
// Uploading Pictures
$(document).ready(function(){
    // Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		
		let imageInput  = document.getElementById('fil')
		$("#sign").on('click', (evt) => {
			let firstFile = imageInput.files[0] // upload the first file only
			let storageRef = firebase.storage().ref('photos/'+firstFile.name)
			let uploadTask = storageRef.put(firstFile)
				.then(()=>{
					alert("Done uploading")
				})
        })
});