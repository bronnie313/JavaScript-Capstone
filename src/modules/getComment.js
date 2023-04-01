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

export default getComment;
