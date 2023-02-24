const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{

    const countryContainer = document.getElementById('all-countries')
    // console.log(country)
    for(const country of countries){
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('.country');
        countryDiv.innerHTML =`

        <h3>Name: ${country.name.common} </h3>
        <p>City : ${country.capital ? country.capital[0] : 'No capital'} </p>
  
        
        `;

        countryContainer.appendChild(countryDiv)
        


    }
}

loadCountries()