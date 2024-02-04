function handleYes() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "<p></p>";

  // Make the 'No' button disappear
  const noButton = document.querySelector('.options button:last-child');
  noButton.style.display = 'none';

  // Add more logic or actions for the 'Yes' button
  setTimeout(function () {
    resultDiv.innerHTML = "<p style='font-size: 1.7em; color: red; transition: all 1s;'>That was quick!</p>";

    setTimeout(function () {
      resultDiv.innerHTML = "<p style='font-size: 2em;'><span class='love-text'>My Sweetest Noona🥺</span></p>";

      setTimeout(function () {
        resultDiv.innerHTML = "<p style='font-size: 3em;'><span class='love-text'>I Love You ❤️</span></p>";

        // Display repeating images after one second
        setTimeout(function () {
          const numImages = 170; // Number of repeating images
          const imagePath = '/AIV/Images/IMG9.jpg'; // Replace with the actual path to your image

          for (let i = 0; i < numImages; i++) {
            const imageElement = document.createElement('img');
            imageElement.src = imagePath;
            imageElement.style.width = '120px'; // Adjust the width as needed
            imageElement.style.height = '120px'; // Adjust the height as needed
            imageElement.style.position = 'fixed';
            imageElement.style.top = `${Math.random() * window.innerHeight}px`;
            imageElement.style.left = `${Math.random() * window.innerWidth}px`;
            imageElement.style.zIndex = '9999'; // Adjust the z-index to make it appear above other elements
            imageElement.style.transition = 'opacity 0.5s ease-in-out'; // Smooth opacity transition
            imageElement.style.opacity = '0'; // Start with opacity 0

            // Append the image element to the body
            document.body.appendChild(imageElement);

            // Trigger a reflow to apply the initial opacity
            imageElement.offsetHeight;

            // Set opacity to 1 to start the smooth transition
            imageElement.style.opacity = '1';
          }
        }, 1000);
        
        const audio = new Audio('/AIV/Audio /george-micael-wham-careless-whisper-1.mp3'); // Replace with the actual path to your sound file
  audio.play();
  
        setTimeout(function () {
          window.location.href = '/Credits Page.html'; // Replace with the actual path to your credits page
        }, 9000);
        

      }, 1000);

    }, 1000);

  }, 1000);
}



let noButtonClickCount = 0;

function handleNo() {
  const resultDiv = document.getElementById('result');
  const optionsDiv = document.querySelector('.options');
  const yesButton = document.querySelector('.options button:first-child');
  const noButton = document.querySelector('.options button:last-child');

  noButtonClickCount++;

  // Make the 'Yes' button disappear when 'No' is clicked
  yesButton.style.display = 'none';

  if (noButtonClickCount === 1) {
    resultDiv.innerHTML = "<p style='font-size: 20px;'>Oh no! Maybe next time. 😢</p>";
  } else if (noButtonClickCount === 2) {
    resultDiv.innerHTML = "<p style='font-size: 24px;'>Still tapping, huh? 😭</p>";
  } else if (noButtonClickCount === 3) {
    resultDiv.innerHTML = "<p style='font-size: 28px;'>Ready to give up yet? 😂</p>";

    // Hide the 'No' button after the third click
    noButton.style.display = 'none';

    // Add a new button and result
    setTimeout(function () {
      // Remove 'Yes' and 'No' buttons
      yesButton.style.display = 'none';
      noButton.style.display = 'none';

      // Add a new button named 'Eii God😭'
      const newButton = document.createElement('button');
      newButton.innerText = 'Eii God😭';
      newButton.onclick = handleEiiGodOption; // Define a new function for this button
      optionsDiv.appendChild(newButton);

      // Display a whole new result for the added button
      resultDiv.innerHTML = "<p></p>";
    }, 1000);
  }

  // Move the 'No' button to a new position
  const newPositionX = Math.floor(Math.random() * (window.innerWidth - 100));
  const newPositionY = Math.floor(Math.random() * (window.innerHeight - 30));

  noButton.style.position = 'absolute';
  noButton.style.left = `${newPositionX}px`;
  noButton.style.top = `${newPositionY}px`;

  // Add more logic or actions for the 'No' button as needed
}

// New function for the added 'Eii God😭' button
function handleEiiGodOption() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "<p>Wow Just Wow😭</p>";

  // Display second message for the 'Eii God😭' result
  setTimeout(function () {
    resultDiv.innerHTML += "<p style='font-size: 2em; color: white;'>Omo Go Find Your Valentine</p>";

    // Display third message for the 'Eii God😭' result
    setTimeout(function () {
      resultDiv.innerHTML += "<p style='font-size: 3em;'>Goodbye😭</p>";

      // Display repeating images with a smooth animation
      setTimeout(function () {
        const numImages = 170; // Number of repeating images
        const imagePath = '/AIV/Images/IMG10.jpg'; // Replace with the actual path to your image

        for (let i = 0; i < numImages; i++) {
          const imageElement = document.createElement('img');
          imageElement.src = imagePath;
          imageElement.style.width = '100px'; // Adjust the width as needed
          imageElement.style.height = '100px'; // Adjust the height as needed
          imageElement.style.position = 'fixed';
          imageElement.style.top = `${Math.random() * window.innerHeight}px`;
          imageElement.style.left = `${Math.random() * window.innerWidth}px`;
          imageElement.style.zIndex = '9999'; // Adjust the z-index to make it appear above other elements
          imageElement.style.transition = 'opacity 0.2s ease-in-out'; // Smooth opacity transition
          imageElement.style.opacity = '0'; // Start with opacity 0

          // Append the image element to the body
          document.body.appendChild(imageElement);

          // Trigger a reflow to apply the initial opacity
          imageElement.offsetHeight;

          // Set opacity to 1 to start the smooth transition
          imageElement.style.opacity = '1';
        }
      }, 1000);
      const audio = new Audio('/AIV/Audio /awkward-cricket-sound-effect.mp3'); // Replace with the actual path to your sound file
  audio.play();

    }, 1000);

  }, 1000);

  // Add more logic or actions for the 'Eii God😭' button as needed
}


