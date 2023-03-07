// console.log('ss')

const loadAllData = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showAllData(data));
};

const showAllData = (countries) => {
  // console.log(countries);
  const countryContainer = document.getElementById("country-info")
  countries.slice(0, 15).forEach((country) => {
    console.log(country);
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card w-full h-96 bg-base-100 shadow-xl bg-base-300">
  <figure class="px-10 pt-10">
    <img src="${country.flags.png}" alt="flag" class="rounded-2xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${country.name.common}</h2>
    <p>Population: ${country.population}</p>
    <div class="card-actions">
      <button onclick="showInfo('${country.cca2}')" class="btn btn-primary">Informations</button>
    </div>
  </div>
</div>
        `;
    countryContainer.appendChild(div);
  });
};

// const showInfo = (id) => {
//   const URL = `https://restcountries.com/v3.1/alpha/${id}`;
//   fetch(URL)
//     .then(res => res.json())
//     .then((data) => console.log(data));
// }

loadAllData();
