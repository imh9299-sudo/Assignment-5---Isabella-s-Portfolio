//function myFunction() {
//  let x = document.body;
//  x.classList.toggle("w3-black");
//}


function openArt(artName) {var i;
  var x = document.getElementsByClassName("art");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(artName).style.display = "block";  
}

  openArt('Home'); // show Home when page loads

  function magic(){
    let img = document.getElementById("myImage");
    img.scr = "Final_Logo1.png";
  // frame 1
  img.src = "Final_Logo1.png";
  setTimeout(function () {
    img.src = "Final_Logo2.png";
  }, 1000);

  // frame 2
  setTimeout(function () {
    img.src = "Final_Logo3.png";
  }, 2000);

  // frame 3
  setTimeout(function () {
    img.src = "Final_Logo4.png";
  }, 3000);

  // frame 4
  setTimeout(function () {
    img.src = "Final_Logo5.png";
  }, 4000);
}

magic();
setInterval(magic, 5000);