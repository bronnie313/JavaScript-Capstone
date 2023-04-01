import './styles.css';
import movie from './assets/movie.png';
import addComment from './modules/addComment.js';
import displayComments from './displayCommnents.js';
import addLike from './modules/addLikes.js';

// import displayShowsData from './displayShowsData.js';
// import fetchShowsData from './fetchShowsData';

// displayShowsData();
const logo = document.getElementById('logo');
logo.src = movie;

const container = document.getElementById('cont');
container.appendChild(logo);

// closing the comment section
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

//  get likes
const getLikes = async () => {
  const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ks3kK3cgFuKaK7pMQUGy/likes';
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

// display data
const forest = document.getElementById('forest');

const displayData = async () => {
  const data = await getData();
  data.forEach((data, i) => {
    forest.innerHTML += `
      <div class="film">
        <img class="cinema" src=${data.image.medium}>
         <p class="film-name">${data.name}</p>
        <button class="commentBtn" data-index="${i}">comments</button> 
        <button class="reservBtn" data-index="${i}">reservation</button>
        <div class="likes-section"><button class="likeBtn" data-index="${i}">Likes</button><div id="noLike"></div></div>
        <i class="fa-regular fa-heart"></i>
      </div>
    `;
    // displaying likes
    const displayLikes = async () => {
      if (!data.error) {
        const data = await getLikes();
        const noLikeDiv = document.querySelectorAll('#noLike')[i];
        noLikeDiv.innerHTML = `${data[i].likes} likes`;
      }
    };
    displayLikes();
  });
};

displayData();

forest.addEventListener('click', async (event) => {
  if (event.target.classList.contains('commentBtn')) {
    const index = parseInt(event.target.dataset.index, 10);
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
      displayComments(selectedMovie.id);
    });
  }

  // check if the clicked element is a reservation button
  if (event.target.classList.contains('reservBtn')) {
    // const index = parseInt(event.target.dataset.index);
    // console.log(index)
  }

  // check if the clicked element is a clicked button at the right index
  if (event.target.classList.contains('likeBtn')) {
    const index = parseInt(event.target.dataset.index, 10);
    const data = await getData();
    const selectedMovie = data[index];
    // console.log(selectedMovie.id)
    await addLike(selectedMovie.id);
    // displayLikes(selectedMovie.id);
  }
});
