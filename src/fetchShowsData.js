const apiKey = '{BSoXkkCLDpXvsVEWmeucPVwel0ajRbUB}'; // Replace with your actual API key
const numShows = 100; // Number of shows to retrieve

// Fetches the TV show data and returns a Promise that resolves to an array of show data objects
export default function fetchShowsData() {
  return fetch(`https://api.tvmaze.com/shows?page=0&per_page=${numShows}`)
    .then((response) => {
      if (response.ok) {
        // Parse the JSON response
        return response.json();
      }
      throw new Error(`Request failed with status ${response.status}`);
    })
    .then((shows) => {
      // Extract the IDs of the shows
      const showIds = shows.map((show) => show.id);

      // Make an individual request for each show to retrieve detailed information
      return Promise.all(showIds.map((id) => {
        const url = `https://api.tvmaze.com/shows/${id}?embed=cast`;
        return fetch(url, {
          headers: {
            Accept: 'application/json',
          },
          params: {
            apikey: apiKey,
          },
        }).then((response) => response.json());
      }));
    });
}
