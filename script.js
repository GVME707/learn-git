
let links = document.querySelectorAll('a');
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    alert('You clicked on ' + link.textContent + '!');
  });
});
