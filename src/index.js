import './styles.css';
import movie from './assets/movie.png';

// import displayShowsData from './displayShowsData.js';
// import fetchShowsData from './fetchShowsData';

// displayShowsData();

const logo = document.getElementById('logo');
logo.src = movie;

const container = document.getElementById('cont');
container.appendChild(logo);

const closeBtn = document.getElementById('close-button');
const showMovie = document.getElementById('movie');

// add event Listener to the form
const submit = document.querySelector('.submit');
const userInput = document.getElementById('user-input');
const userComment = document.getElementById('user-comment');

closeBtn.addEventListener('click', () => {
  showMovie.style.display = 'none';
});

// get data from the API
const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  return data;
};

// display data
const forest = document.getElementById('forest');
let id;
const displayData = async () => {
  const data = await getData();
  data.forEach((data, i) => {
    forest.innerHTML += `
      <div class="film">
        <img class="cinema" src=${data.image.medium}>
         <p class="film-name">${data.name}</p>
        <button class="commentBtn" data-index="${i}">comments</button> 
        <button class="reservBtn" data-index="${i}">reservation</button>
      </div>
    `;
    id = data.id;
  });
};

displayData();

// displaying comments
const chart = document.getElementById('chart');
const commentCounter = document.getElementById('comment-counter');
const displayComments = async (id) => {
  const data = await getComment(id);
  const length = data?.length ?? 0;
  commentCounter.innerHTML = `(${length}) comments`;
  chart.innerHTML = '';
  if (!data.error) {
    data.forEach((comment) => {
      const li = document.createElement('li');
      li.className = 'chart-comments';
      li.innerHTML = `<p class="comments-p">"${comment.comment}" By '${comment.username}' on "${comment.creation_date}"</p>`;
      chart.appendChild(li);
    });
  }
};

forest.addEventListener('click', async (event) => {
  if (event.target.classList.contains('commentBtn')) {
    const index = parseInt(event.target.dataset.index);
    const data = await getData();
    const selectedMovie = data[index];
    const movieInfo = document.getElementById('movie-info');
    movieInfo.innerHTML = `
      <img class="pop-img" src=${selectedMovie.image.medium}>
      <p class="movieName">${selectedMovie.name}</p>
      <div class="info">
        <p class="sum">LANGUAGE: ${selectedMovie.language}</p>
        <p class="sum">STATUS: ${selectedMovie.status}</p>
        <p class="sum">PREMIERED: ${selectedMovie.premiered}</p>
        <p class="sum">ENDED: ${selectedMovie.ended}</p>
      </div>
    `;
    const showMovie = document.getElementById('movie');
    showMovie.style.display = 'block';
    displayComments(selectedMovie.id);

    submit.addEventListener('click', async (e) => {
      e.preventDefault();
      await addComment(selectedMovie.id, userInput.value, userComment.value);
      userComment.value = '';
      userInput.value = '';
      displayComments();
    });
  }

  // check if the clicked element is a reservation button
  if (event.target.classList.contains('reservBtn')) {
    // const index = parseInt(event.target.dataset.index);
    // console.log(index)
  }
});

// Adding comment

const addComment = async (id, username, comment) => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaFwCQaj74dsBIFihdqp/comments',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
    });
  return res;
};

// getting comments
const getComment = async (id) => {
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaFwCQaj74dsBIFihdqp/comments?item_id=${id}`;
  const res = await fetch(URL,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const data = await res.json();
  return data;
};
