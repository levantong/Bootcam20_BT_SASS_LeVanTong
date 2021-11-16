window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "white";
    document.getElementById("navbar").style.height = "48px";
    document.querySelector(".navbar-brand").style.display = "none"
    document.querySelector(".nav-call button").style.padding = "0.6em 1.5em";
    document.getElementById("navbar").style.boxShadow = "0 0 10px 0 rgba(204, 204, 204, 0.5)";


    // document.getElementById("navbar").style.height = "none";
  // else if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
  //   document.getElementById("navbar").style.display = "block";


  } else{
      document.getElementById("navbar").style.background = "transparent";
    document.getElementById("navbar").style.height = "96px"
    document.querySelector(".navbar-brand").style.display = "block"
    document.querySelector(".nav-call button").style.padding = "0.8em 1.5em";
    document.getElementById("navbar").style.boxShadow = "none";

  }
}