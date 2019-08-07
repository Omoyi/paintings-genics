// Business logic
var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
};

//user interface
// $(document).ready(function(){
//   $("img#male").click(function(){
//     $("img#female").hide();
//   });
//   $("img#female").click(function(){
//     $("img#male").hide();
//   });
// });