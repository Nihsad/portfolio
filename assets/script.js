document.addEventListener("DOMContentLoaded", function(event) { 
  window.onscroll = function() { stickyHeader() };

    var header = document.getElementById("main-header");
    var body = document.body; // Get the body element

    function stickyHeader() {
      if (window.pageYOffset > header.offsetTop) {
        header.classList.add("sticky");
        body.classList.add("scrolled"); // Add the scrolled class to the body
      } else {
        header.classList.remove("sticky");
        body.classList.remove("scrolled"); // Remove the scrolled class from the body
      }
    }
  }