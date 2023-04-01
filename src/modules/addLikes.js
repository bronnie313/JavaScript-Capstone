// Adding likes
const addLike = async (id) => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ks3kK3cgFuKaK7pMQUGy/likes',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
  return res;
};

export default addLike;