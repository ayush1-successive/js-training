// Convert a callback-based API to a Promise-based API
// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null, "Data fetched successfully");
//   }, 1000);
// }

const operationSuccess = true;

const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        operationSuccess
          ? resolve("Data fetched successfully!")
          : reject("Error fetching data!"),
      1000
    );
  });

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
