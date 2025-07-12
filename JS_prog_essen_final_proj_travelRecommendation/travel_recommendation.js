function showCities(){
    const heading = document.createElement("h2");
    heading.textContent = "Cities";
    document.getElementById("recomCities").appendChild(heading);

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
      .then(data => {
        for(const country of data.countries){
            for(const city of country.cities){
                const img = document.createElement("img");
                img.src = city.imageUrl;
                img.width = 100;
                img.height = 100;
                img.alt = city.name;
                img.title = city.name;
                document.getElementById("recomResultCities").appendChild(img);
            }
        }
      }).catch(error => {
        console.error('Error:', error);
        document.getElementById("recomResultCities").innerHTML = 'An error occurred while fetching data.';
      });
}

function showArches(){
    const heading = document.createElement("h2");
    heading.textContent = "Architectures";
    document.getElementById("recomArch").appendChild(heading);

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
      .then(data => {
        for(const temple of data.temples){
            const temImg = document.createElement("img");
            temImg.src = temple.imageUrl;
            temImg.width = 100;
            temImg.height = 100;
            temImg.alt = temple.name;
            temImg.title = temple.name;
            document.getElementById("recomResultArch").appendChild(temImg);
        }
      }).catch(error => {
        console.error('Error:', error);
        document.getElementById("recomResultArch").innerHTML = 'An error occurred while fetching data.';
      });
}

function showBeaches(){
    const heading = document.createElement("h2");
    heading.textContent = "Leisures And Beaches";
    document.getElementById("recomBeaches").appendChild(heading);

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
      .then(data => {
        for(const beach of data.beaches){
            const bImg = document.createElement("img");
            bImg.src = beach.imageUrl;
            bImg.width = 100;
            bImg.height = 100;
            bImg.alt = beach.name;
            bImg.title = beach.name;
            document.getElementById("recomResultBeaches").appendChild(bImg);
        }
      }).catch(error => {
        console.error('Error:', error);
        document.getElementById("recomResultBeaches").innerHTML = 'An error occurred while fetching data.';
      });
}

function showRecommendations(){
    showCities();
    showArches();
    showBeaches();
}

showRecommendations();

function filterBySearchKeyWords(){
    const input = document.getElementById("searchInput").value.toLowerCase();
    if(input.includes('cit')) {
        document.getElementById("recomCities").innerHTML = "";
        document.getElementById("recomResultCities").innerHTML = "";
        showCities();
        document.getElementById("recomArch").innerHTML = "";
        document.getElementById("recomResultArch").innerHTML = "";
        document.getElementById("recomBeaches").innerHTML = "";
        document.getElementById("recomResultBeaches").innerHTML = "";
    } else if(input.includes('arch')) {
        document.getElementById("recomArch").innerHTML = "";
        document.getElementById("recomResultArch").innerHTML = "";
        showArches();
        document.getElementById("recomCities").innerHTML = "";
        document.getElementById("recomResultCities").innerHTML = "";
        document.getElementById("recomBeaches").innerHTML = "";
        document.getElementById("recomResultBeaches").innerHTML = "";
    } else if(input.includes('beach')) {
        document.getElementById("recomBeaches").innerHTML = "";
        document.getElementById("recomResultBeaches").innerHTML = "";
        showBeaches();
        document.getElementById("recomCities").innerHTML = "";
        document.getElementById("recomResultCities").innerHTML = "";
        document.getElementById("recomArch").innerHTML = "";
        document.getElementById("recomResultArch").innerHTML = "";
    }
}

btnSearch.addEventListener('click', filterBySearchKeyWords);

