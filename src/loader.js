// Create preloader element
var preloader = document.createElement('div');
preloader.className = 'preloader';
preloader.innerHTML = `
  <div className="load-1"></div>
  <div className="load-2"></div>
  <div className="load-3"></div>
  <div className="load-4"></div>
  <div className="load-5"></div>
`;

// Add preloader element to page
document.body.appendChild(preloader);

// Show preloader
preloader.style.display = 'block';

// Hide preloader after 2 seconds
setTimeout(function() {
  preloader.style.display = 'none';
}, 2000);
