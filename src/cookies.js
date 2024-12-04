// Create cookie consent pop-up
function createCookieConsent() {
    // Check if user has already accepted cookies
    if (document.cookie.indexOf('cookieconsent') === -1) {
      // Create pop-up element
      var popup = document.createElement('div');
      popup.innerHTML = '<p>This website uses cookies to ensure you get the best experience. By using our site, you consent to our <a href="/privacy-policy">privacy policy</a>.</p><button onclick="acceptCookies()" >Accept</button>';
      popup.style.position = 'fixed';
      popup.style.bottom = '0';
      popup.style.left = '0';
      popup.style.right = '0';
      popup.style.background = 'black';
      popup.style.padding = '10px';
      popup.style.borderTop = '0.5px solid #ccc';
      popup.style.textAlign = 'center';
      popup.style.zIndex = '9999';
      // Add pop-up to document
      document.body.appendChild(popup);
    }
  }
  
  // Accept cookies
  function acceptCookies() {
    // Set cookie to remember user's choice
    document.cookie = 'cookieconsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    // Remove pop-up from document
    var popup = document.querySelector('.cookieconsent');
    popup.parentNode.removeChild(popup);
  }
  
  // Decline cookies
  function declineCookies() {
    // Remove pop-up from document
    var popup = document.querySelector('.cookieconsent');
    popup.parentNode.removeChild(popup);
  }
  
  // Call createCookieConsent function on page load
  window.addEventListener('load', createCookieConsent);
  
  