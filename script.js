// script.js - small interactions
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for the Discover button
document.getElementById('discover-btn').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({behavior:'smooth'});
});
