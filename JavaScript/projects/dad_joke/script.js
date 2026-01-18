const joke = document.querySelector(".joke");

async function getJoke() {
  let api = "https://icanhazdadjoke.com/"
  let response = await fetch(api, {
    headers: {
      Accept: "application/json"
    }
  })
  let data = await response.json()
  joke.innerText = data.joke;
  console.log(data)

}

document.querySelector(".joke-btn").addEventListener("click", getJoke)
getJoke();