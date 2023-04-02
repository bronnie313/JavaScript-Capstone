const getReservations = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kMfZtpBsA8ykWcn9ZrZx/reservations?item_id=${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Data from API:', data);

    return data;
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return null;
  }
};

const displayReservations = async (id) => {
  const data = await getReservations(id);
  console.log('Data from getReservations:', data);
  const scoreboard = document.getElementById('reservation-list');
  scoreboard.innerHTML = '';
  const header = document.createElement('h3');
  header.textContent = `Reservations${data.length ? ` (${data.length})` : ''}`;
  scoreboard.appendChild(header);
  if (!data.error) {
    data.forEach((reservation) => {
      const li = document.createElement('li');
      li.classList.add('reserve-list');
      li.textContent = `${reservation.date_start}  -  ${reservation.date_end} by ${reservation.username}`;
      scoreboard.appendChild(li);
    });
  }
};

const addReservation = async (id, username, datestart, dateend) => {
  const formattedStartDate = new Date(datestart).toISOString();
  const formattedEndDate = new Date(dateend).toISOString();

  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kMfZtpBsA8ykWcn9ZrZx/reservations/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      date_start: formattedStartDate,
      date_end: formattedEndDate,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('Response from API:', response);

  return response;
};

export { addReservation, getReservations, displayReservations };
