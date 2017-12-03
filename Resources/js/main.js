$(document).ready(function(){

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal
  var img1 = document.getElementById('myImg1');
  var img2 = document.getElementById('myImg2');
  var img3 = document.getElementById('myImg3');
  var img4 = document.getElementById('myImg4');
  var img5 = document.getElementById('myImg5');
  var img6 = document.getElementById('myImg6');

  img1.onclick = function(){
    modal.style.display = "block";
    $('.carousel').slick({
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  };

  img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }

  img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }

  img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }

  img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }

  img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // or if the user clicks outside of the image, close the modal
  // modal.addEventListener('click',function(){
  //  this.style.display="none";
  // })

  // Prevent the page from jumping to top when opening the gallery modal //
  $("a").click(function(event){
    event.preventDefault();
  });
});
