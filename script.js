let heading = document.querySelector('h1');
heading.textContent = 'Welcome to my awesome project!';

let links = document.querySelectorAll('a');
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    alert('You clicked on ' + link.textContent + '!');
  });
});
