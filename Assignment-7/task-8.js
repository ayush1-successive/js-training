// Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

const randomNumber = 1 + Math.floor(Math.random() * 9);

const userApi = "https://jsonplaceholder.typicode.com/users/" + randomNumber;
const postApi = "https://jsonplaceholder.typicode.com/posts/" + randomNumber;
const commentApi =
  "https://jsonplaceholder.typicode.com/comments/" + randomNumber;

// Fetches data parallely from multiple apiUrls
const fetchDataFromMultipliApis = async (apiUrls) => {
  try {
    const responses = await Promise.all(apiUrls.map((url) => fetch(url)));

    // Check for failed responses
    for (const response of responses) {
      if (!response.ok) {
        throw new Error("Error fetching data!");
      }
    }

    // Process each response into json object
    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    // Extract data from json object
    const userName = data[0].name;
    const userPost = data[1].body;
    const userComments = data[2].body;

    // Display user, post and comments
    console.log("User:", userName, "\n");
    console.log("Post:", userPost, "\n");
    console.log("Comments:", userComments);
  } catch (error) {
    console.log("Error:", error);
  }
};

fetchDataFromMultipliApis([userApi, postApi, commentApi]);
