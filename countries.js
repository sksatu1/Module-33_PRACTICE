const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
// auto loading of all countries 
loadCountries();

const displayCountries = countries => {
    console.log(countries);
    const countriesContainer = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country);

        // countriesContainer.innerHTML = `<h1>${country.name}</h1>`;

        // inner html use kore opore jeita korechi seta bar bar loop caliye inner html change korchi tai matro ekta country er name asche ....tai ei  vabe kora jabe na......

        // niser rule onujayi korte hobe................

        // trick : 1--------------------------------------------------
        /*  const div = document.createElement('div');
         div.classList.add('country')
 
         const h1 = document.createElement('h1');
         h1.innerText = country.name;
         div.appendChild(h1);
 
         const p = document.createElement('p');
         p.innerText = country.capital;
         div.appendChild(p);
 
         countriesContainer.appendChild(div); */

        // trick : 2 -----------------------------------------------------
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <img width="200px" src="${country.flag}">
         <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button class="country-btn" onclick="loadCountryByName('${country.name}')">click here</button>`;
        countriesContainer.appendChild(div);

    });
}

const loadCountryByName = name => {
    console.log(name);
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryByName(data[0]))
}

const displayCountryByName = country => {
    const countryDetailsContainer = document.getElementById('country-details');

    // proti click e previous ta change hoye jeta click korbo seta er details dekhbo tai innerHTML use korechi
    countryDetailsContainer.innerHTML = `
    <img width="200px" src="${country.flag}">
         <h3>${country.name}</h3>
        <p>${country.capital}</p>
    `
}