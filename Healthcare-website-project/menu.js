
function myFunction(){
    var x = document.getElementById("topnavbar");
    if (x.className === "mytopnav") {
      x.className += " responsive";
    } else {
      x.className = "mytopnav";
    }
  }