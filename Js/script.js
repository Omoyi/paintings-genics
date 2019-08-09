// Business logic
$(document).ready(function(){
  var modal = document.getElementById('id01');
  window.onclick = function(event) {
    event.preventDefault();
    if (event.target === modal) {
    modal.style.display = "none";
    };
  };
  $(function() {
    var selectedClass = "";
    $(".filter").click(function(){
      selectedClass = $(this).attr("data-rel");
      $("#gallery").fadeTo(100, 0.1);
      $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
      setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
      }, 300);
    });
  });
});
