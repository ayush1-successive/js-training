// Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

// OpenApi for random jokes
const apiUrl = "https://v2.jokeapi.dev/joke/Programming?type=single";

// Call to ApiUrl with callback function
const callToApi = (callback, apiUrl) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => {
      console.log("Error:", error);
    });
};

// Extract the content from full json data
const extractJoke = (data) => console.log(`Random Joke:\n${data["joke"]}`);

callToApi(extractJoke, apiUrl);
