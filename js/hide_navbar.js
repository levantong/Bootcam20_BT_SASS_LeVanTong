window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "white";
    // document.getElementById("navbar").style.height = "none";
  // else if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
  //   document.getElementById("navbar").style.display = "block";


  } else{
      document.getElementById("navbar").style.background = "transparent";
  }
}