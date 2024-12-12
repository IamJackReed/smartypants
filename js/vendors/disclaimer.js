document.getElementById('agreeButton').addEventListener('click', function() {
    // Save acceptance to local storage
    localStorage.setItem('disclaimerAccepted', 'true');
    // Redirect to the main site
    window.location.href = "index.html";
  });
  