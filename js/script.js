// Business logic
$(document).ready(function(){
  var modal = document.getElementById('id01');
  window.onclick = function(event) {
    event.preventDefault();
    if (event.target === modal) {
    modal.style.display = "none";
    };
  };
  
});
