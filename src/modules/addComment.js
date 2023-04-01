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

export default addComment;