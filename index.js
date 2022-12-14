var i=0;
var time =6000;
var images=[];
  images[0]='newimages/Capture 1.PNG';
  images[1]='newimages/Capture 2.jpg';
  images[2]='newimages/Capture 5.jpg';
  images[3]='newimages/Capture3.JPG';
  
  images[4]='newimages/Capture6.JPG';
  function imageSlide(){
      document.slide.src=images[i]
 
      if (i <images.length -1){
        i++
      }
    
      else{
          i=0;
      } 
      setTimeout("imageSlide()",time );

  }

  window.onload=imageSlide;


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
