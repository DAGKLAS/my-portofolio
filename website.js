const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Handle form submission
document.getElementById('recommendationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Show the popup after submission
  document.getElementById('popup').style.display = 'flex';
});

// Close popup on 'Ok' button click
document.getElementById('okButton').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

// Close popup if the 'x' is clicked
document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});





// JavaScript to handle form submission
document.getElementById('recommendationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page refresh

  // Get the values from the form inputs
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  // Check if message is empty
  if (message.trim() === "") {
      alert("Message cannot be empty!");
      return;
  }

  // Create a new recommendation element
  const newRecommendation = document.createElement('div');
  newRecommendation.classList.add('recommendation-cards');

  // Construct the recommendation text
  let recommendationText = `"${message}"`; // Add quotation marks around message
  if (name.trim() !== "") {
      recommendationText += `<br><strong>- ${name}</strong>`; // Add name if provided
  }

  // Set the innerHTML of the new recommendation
  newRecommendation.innerHTML = `<p>${recommendationText}</p>`;

  // Append the new recommendation to the container
  document.getElementById('recommendations').appendChild(newRecommendation);

  // Clear the form fields after submission
  document.getElementById('name').value = "";
  document.getElementById('message').value = "";
  
  // Scroll to the new recommendation (optional)
  newRecommendation.scrollIntoView({ behavior: 'smooth' });
});


