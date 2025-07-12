function showRecommendations(){
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
        document.getElementById("recomResult").innerHTML = 'An error occurred while fetching data.';
      });
}


showRecommendations();

