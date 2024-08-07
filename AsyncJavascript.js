//Callbacks

function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched");
      callback();
    }, 1000);
  }
  
  function processData() {
    console.log("Data processed");
  }
  
  fetchData(processData);

//Promises
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data fetched");
        resolve("Fetched data");
      }, 1000);
    });
  }
  
  fetchData().then(data => {
    console.log("Data processed:", data);
  });

//Async/Await

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data fetched");
        resolve("Fetched data");
      }, 1000);
    });
  }
  
  async function processData() {
    const data = await fetchData();
    console.log("Data processed:", data);
  }
  
  processData();
  