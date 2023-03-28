/* eslint-disable no-console */
// mport './styles.css';
import fetchShowsData from './fetchShowsData.js';

const display = document.querySelector('.display');
display.innerHTML = '';

// Displays the TV show data in the HTML page
export default function displayShowsData() {
  fetchShowsData()
    .then((showDataList) => {
      // Use the showDataList to display information about each TV show
      console.log(showDataList);

      // Build the HTML string to display the TV show information
      showDataList.forEach((showData) => {
        const showCard = document.createElement('div');
        showCard.classList.add('show-card');

        const showCardHeader = document.createElement('div');
        showCardHeader.classList.add('show-card-header');

        const showCardTitle = document.createElement('h2');
        showCardTitle.classList.add('show-card-title');
        showCardTitle.innerText = showData.name;

        const showCardButtons = document.createElement('div');
        showCardButtons.classList.add('show-card-buttons');

        const likeButton = document.createElement('div');
        likeButton.classList.add('like-button');

        const likeIcon = document.createElement('img');
        likeIcon.classList.add('like-icon');
        likeIcon.src = '../media/pngwing.com.png';
        likeIcon.alt = 'Like Icon';
        likeButton.appendChild(likeIcon);

        const commentsButton = document.createElement('button');
        commentsButton.classList.add('comments-button');
        commentsButton.innerText = 'Comments';

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const image = document.createElement('img');
        image.setAttribute('src', showData.image.medium);
        image.setAttribute('alt', showData.name);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const reservationButton = document.createElement('button');
        reservationButton.classList.add('reservation-button');
        reservationButton.innerText = 'Reserve Now';

        imageContainer.appendChild(image);

        buttonContainer.appendChild(reservationButton);
        buttonContainer.appendChild(commentsButton);

        showCardHeader.appendChild(showCardTitle);
        showCardHeader.appendChild(likeButton);

        showCard.insertAdjacentHTML('beforeend', imageContainer.outerHTML + showCardHeader.outerHTML + buttonContainer.outerHTML);

        display.appendChild(showCard);
      });

      // Add event listeners to the lie buttons
      const lieButtons = document.querySelectorAll('.lie-button');
      lieButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const { showId } = button.dataset;
          console.log(`User clicked lie button for show ID ${showId}`);
          // Add your code here to handle the lie button click event
        });
      });

      // Add event listeners to the reservation buttons
      const reservationButtons = document.querySelectorAll('.reservation-button');
      reservationButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const { showId } = button.dataset;
          console.log(`User clicked reservation button for show ID ${showId}`);
          // Add your code here to handle the reservation button click event
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
