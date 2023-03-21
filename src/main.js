var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000, // Set the interval for auto-scrolling
  wrap: true, // Allow the carousel to loop through the slides
})

// Add event listener to the "pause" button to pause the carousel when clicked
document.querySelector('#pauseButton').addEventListener('click', function() {
  carousel.pause()
})

// Add event listener to the "play" button to start the carousel when clicked
document.querySelector('#playButton').addEventListener('click', function() {
  carousel.cycle()
})

var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  wrap: true
});

$(function() {
  $('#datepicker').datepicker();
});
