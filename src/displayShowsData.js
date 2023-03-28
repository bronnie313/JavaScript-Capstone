/* eslint-disable no-console */
import fetchShowsData from './fetchShowsData.js';

const display = document.querySelector('.display');
display.innerHTML = 'Loading...';

// Displays the TV show data in the HTML page
export default function displayShowsData() {
  fetchShowsData()
    .then((showDataList) => {
      // Use the showDataList to display information about each TV show
      console.log(showDataList);

      // Build the HTML string to display the TV show information
      let html = '';
      showDataList.forEach((showData) => {
        html += '<div>';
        html += `<h2>${showData.name}</h2>`;
        html += `<img src="${showData.image.medium}" alt="${showData.name}">`;
        html += `<p>${showData.summary}</p>`;
        html += '<div class="button-container">';
        html += '<button class="reservations-button">Reservations</button>';
        html += '<button class="lie-button">Lies</button>';
        html += '</div>';
        html += '</div>';
      });

      // Set the innerHTML of the display element to the HTML string
      display.innerHTML = html;

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
