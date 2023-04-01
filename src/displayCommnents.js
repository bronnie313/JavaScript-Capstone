import getComment from './modules/getComment.js';

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

export default displayComments;