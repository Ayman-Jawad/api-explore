const searchAllData = () => {
  const inputElement = document.getElementById('search-value')
  document.getElementById("single-player-details").innerHTML = " ";
  document.getElementById('male').classList.add("d-none")
  document.getElementById('female').classList.add("d-none")
  document.getElementById("spinner").classList.remove("d-none");
  const inputValue = inputElement.value
  // console.log(inputValue);

  const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`;
  // console.log(URL);



  fetch(URL)
    .then(res => res.json())
    .then(data => {
      document.getElementById("spinner").classList.add("d-none");
      showPlayerData(data.player);
    });
};



const showPlayerData = (players) => {
  document.getElementById('search-value').value = "";
  const container = document.getElementById("player-info");
  container.innerHTML = "";
  players.forEach((player) => {

    // console.log(player);

    const { strThumb, strPlayer, strNationality, idPlayer
    } = player;
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card">
      <img src="${strThumb ? strThumb : "https://picsum.photos/500/300?random=1"}"class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <p class="card-text">Nationality: ${strNationality}</p>
      </div>
      <div class="my-4">
      <button onclick="singlePlayer('${idPlayer
      }')" type="button" class="btn btn-warning ms-4">Details</button>
      <button type="button" class="btn btn-info ms-4">Delete</button>
      </div>
    </div>

`;

    container.appendChild(div)
  });

};

const singlePlayer = (id) => {
  const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
  // console.log(URL);
  fetch(URL)
    .then(res => res.json())
    .then(data => showSinglePlayer(data.players[0]))
}

const showSinglePlayer = (data) => {
  const { strThumb, strPlayer, strDescriptionEN, strGender } = data;
  const container = document.getElementById("single-player-details");
  container.innerHTML = " ";
  const div = document.createElement("div");
  if (strGender === "Male") {
    document.getElementById('male').classList.remove("d-none")
  }
  else {
    document.getElementById('female').classList.remove("d-none")
  }

  div.innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${strThumb ? strThumb : "https://picsum.photos/500/300?random=1"}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <p class="card-text">${strDescriptionEN.slice(0, 100) + "..."}</p>
        <p class="card-text"><small class="text-muted">Last updated 2 minutes ago</small></p>
      </div>
    </div>
  </div>
  </div>
  `;
  container.appendChild(div)
}