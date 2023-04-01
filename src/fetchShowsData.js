const apiKey = '{BSoXkkCLDpXvsVEWmeucPVwel0ajRbUB}'; // Replace with your actual API key
const numShows = 10; // Number of shows to retrieve

// Fetches the TV show data and returns a Promise that resolves to an array of show data objects
export default function fetchShowsData() {
  const url = `https://api.tvmaze.com/shows?page=0&per_page=${numShows}`;
  return fetch(url, {
    headers: {
      Accept: 'application/json',
    },
    params: {
      apikey: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        // Parse the JSON response
        return response.json();
      }
      throw new Error(`Request failed with status ${response.status}`);
    })
    .then((shows) => shows.map((show) => {
      const {
        id, name, image, summary,
      } = show;
      return {
        id, name, image, summary,
      };
    }));
}
