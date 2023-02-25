const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {

    const countryContainer = document.getElementById('all-countries')
    // console.log(country)
    for (const country of countries) {
        // console.log(country.cca2)
        const countryDiv = document.createElement('div');
        // countryDiv.classList.add(".country");
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `

        <h3>Name: ${country.name.common} </h3>
        <p>City : ${country.capital ? country.capital[0] : 'No capital'} </p>
        <button onclick= displayCountryDetails('${country.cca2}')>Details : </button>
  
        
        `;

        countryContainer.appendChild(countryDiv)



    }
}


const displayCountryDetails = code => {
    const url = `
    https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data=>showData(data[0]))
}

const showData = country =>{
    console.log(country.capital[0])
    const detailsContainer = document.getElementById('show-data');
    detailsContainer.innerHTML=`

    <h3>Name : ${country.name.common} </h3>
    <h4>Capital : ${country.capital[0]}  </h4>
    <img src= "${country.flags.png}">

    `;
}

loadCountries()