document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("main-header");
  var body = document.body;
  var placeholder = document.querySelector(".placeholder");
  var about = document.getElementById("about");
  var nav = document.querySelector("nav");
  var threshold = 100;
  var isSticky = false;
  var headerCreated = false;

  function handleScroll() {
    console.log("handleScroll is executed");
    isSticky = window.pageYOffset > threshold;

    // Toggle the sticky class on the header
    header.classList.toggle("sticky", isSticky);

    // Toggle the display property of the original header based on the scroll position
    header.style.display = isSticky ? "none" : "flex";

    body.classList.toggle("scrolled", isSticky);
    placeholder.classList.toggle("hidden", isSticky);

    if (isSticky) {
        placeholder.style.height = header.offsetHeight + "px";
    } else {
        placeholder.style.height = "0";
    }

    if (window.pageYOffset > threshold && !headerCreated) {
        console.log("Creating nav header");
        // If the navigation is not already sticky and header is not created, create new h1 and p elements and append them to the nav
        createNavHeader();
        headerCreated = true;
    } else if (window.pageYOffset <= threshold && headerCreated) {
        console.log("Removing nav header");
        // If the user is at the top of the page and header is created, remove the created h1 and p elements from the nav
        removeNavHeader();
        headerCreated = false;
    }
}


function createNavHeader() {
  // Create a new container div
  var container = document.createElement("div");

  // Create new h1 and p elements
  var newH1 = document.createElement("h1");
  var newP = document.createElement("p");

  // Copy the content from the original header to the new elements
  newH1.innerHTML = header.querySelector("h1").innerHTML;
  newP.innerHTML = header.querySelector("p.subtitle").innerHTML;

  // Apply existing styles to the new elements
  newH1.style.margin = "0";
  newH1.style.fontSize = "clamp(18px, 2vw, 26px)";
  newH1.style.color = "var(--dark)";
  newH1.style.lineHeight = "100%";

  newP.style.margin = "0";
  newP.style.fontSize = "0.875vw";
  newP.style.color = "var(--grad-2)";
  newP.style.fontFamily = "'Gilda Display', serif";

  // Apply additional styles for fixed positioning
  newH1.style.position = "absolute";
  newH1.style.left = "20px";
  newH1.style.top = "50%";
  newH1.style.transform = "translateY(-50%)";
  newH1.style.zIndex = "1000";

  newP.style.position = "absolute";
  newP.style.left = "calc(20px + 200px + 60px)"; // Adjust left position as needed
  newP.style.top = "55%";
  newP.style.transform = "translateY(-50%)";
  newP.style.zIndex = "1000";

  // Append the new elements to the container
  container.appendChild(newH1);
  container.appendChild(newP);

  // Append the container to the nav
  nav.appendChild(container);
}

  function removeNavHeader() {
    // Remove the dynamically created h1 and p elements from the nav
    var navH1 = nav.querySelector("h1");
    var navP = nav.querySelector("p");
  
    if (navH1) {
      nav.removeChild(navH1);
    }
  
    if (navP) {
      nav.removeChild(navP);
    }
  }

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);
});
