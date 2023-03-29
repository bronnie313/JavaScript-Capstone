/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import './styles.css';

import fetchShowsData from './fetchShowsData.js';

const display = document.querySelector('.display');
display.innerHTML = '';

const appId = 'MEY1lEpdW4154KK05PvE';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
const likesCount = {};

async function init() {
  const likesCount = await getLikes();
  // eslint-disable-next-line no-use-before-define
  displayShowsData(likesCount);
}
document.addEventListener('DOMContentLoaded', () => {
  init();
});

async function getLikes() {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(({ item_id }) => {
    likesCount[item_id] = (likesCount[item_id] || 0) + 1;
  });
  return likesCount;
}

getLikes().then((result) => {
  console.log(result); // output: the likesCount object
});
// Initialize an object to store the number of likes for each show

const likes = document.createElement('button');
likes.classList.add('likes');

// Displays the TV show data in the HTML page
export default function displayShowsData(likesCount) {
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

        const showId = showData.id;

        const showCardButtons = document.createElement('div');
        showCardButtons.classList.add('show-card-buttons');

        const showLikes = likesCount[showId] || 0;
        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.dataset.showId = showData.id;
        likes.innerHTML = `${showLikes} likes`;

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
        showCardHeader.appendChild(likes);

        showCard.insertAdjacentHTML('beforeend', imageContainer.outerHTML + showCardHeader.outerHTML + buttonContainer.outerHTML);

        display.appendChild(showCard);
      });

      // Add event listeners to the like buttons
      const likeButtons = document.querySelectorAll('.like-button');
      likeButtons.forEach((button) => {
        button.addEventListener('click', async () => {
          const { showId } = button.dataset;

          await createLike(showId);
          // Update the likesCount object

          const numLikes = likesCount[showId];
          button.parentElement.querySelector('.likes').innerHTML = `${numLikes} likes`;
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
async function createLike(showId) {
  try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MEY1lEpdW4154KK05PvE/likes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: showId,
      }),
    });
    if (response.ok) {
      // If the request is successful, increment the likes count for this show
      if (likesCount[showId]) {
        likesCount[showId]++;
      } else {
        likesCount[showId] = 1;
      }
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error creating like:', error);
  }
}
