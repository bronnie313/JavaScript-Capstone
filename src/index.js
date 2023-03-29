import './styles.css';

const closeBtn = document.getElementById('close-button');
const openComments = document.getElementById('open-comments');
const showMovie = document.getElementById('movie');

openComments.addEventListener('click', () => {
  showMovie.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  showMovie.style.display = 'none';
});

import displayShowsData from './displayShowsData.js';

displayShowsData();
