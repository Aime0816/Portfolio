let current = 0;
const stories = document.querySelectorAll('.story');

function showNextStory() {
  stories[current].classList.remove('active');
  stories[current].classList.add('previous');

  current = (current + 1) % stories.length;

  stories[current].classList.remove('previous');
  stories[current].classList.add('active');
}

setInterval(showNextStory, 3000); // Change every 3 seconds

//scrolling
  window.addEventListener("scroll", function() {
    document.querySelector(".scroll").style.display = 
      window.scrollY > 200 ? "block" : "none";
  });