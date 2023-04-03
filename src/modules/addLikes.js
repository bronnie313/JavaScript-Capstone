// Adding likes
const addLike = async (id) => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AKFxLIcj6duL7dbwtdY4/likes',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });

  console.log('Response from API:', res);
  return res;
};

const getlike = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AKFxLIcj6duL7dbwtdY4/likes?item_id=${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Data from API:', data);
    return data;
  } catch (error) {
    console.error('Error fetching likes:', error);
    return null;
  }
};

export { addLike, getlike };