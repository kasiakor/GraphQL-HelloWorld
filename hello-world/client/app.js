const GRAPHQL_URL = "http://localhost:9000/";

async function fetchGreeting() {
  //fetch available in modern browers
  //fetch returns a promise
  //obtain response object
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
                query {
                    greeting
                }
            `,
    }),
  });
  //process the response
  //get data in the response body, await response.json (body.json returns a promise)
  //   const responseBody = await response.json();
  //   console.log(responseBody);
  const { data } = await response.json();
  return data;
}

const element = document.getElementById("greeting");
element.textContent = "Loading...";
//the function will be executed after the script is loaded, it is async
//fetchGreeting();
fetchGreeting().then((data) => {
  element.textContent = data.greeting;
});
