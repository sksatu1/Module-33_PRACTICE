document.getElementById('search-warning').style.display = "none"

// search section -----------------------------------------------------------------
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    if (searchText == '') {
        document.getElementById('search-result').textContent = '';
        document.getElementById('meal-details').textContent = '';
        document.getElementById('search-warning').style.display = "block"
    }

    else {
        // clear field -------------------
        searchField.value = '';

        document.getElementById('search-warning').style.display = "none"

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => displaySearchResult(data.meals))
    }
}

// DISPLAY  SEARCH RESULT ----------------------------------------------------------
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');

    // clear previous search result ------------------------------------------
    searchResult.textContent = '';

    // clear previous single meal details 
    document.getElementById('meal-details').textContent = '';

    // console.log(meals);
    if (meals == null) {
        document.getElementById('search-warning').style.display = "block";
    }

    else {
        // console.log(meals);
        meals.forEach(meal => {
            console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                    </div>
            </div>
            `;
            searchResult.appendChild(div);
        });
    }

}

// load single meal detail 
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a target="_blank" href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
}