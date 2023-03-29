/* eslint-disable no-console */
/* eslint-disable camelcase */
const appId = 'MEY1lEpdW4154KK05PvE';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
const likesCount = {};

async function getLikes() {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(({ item_id }) => {
    likesCount[item_id] = (likesCount[item_id] || 0) + 1;
  });
  return likesCount;
}

getLikes().then((result) => {
  console.log(result);
});
