function eval(data) { 
    //Criteria for happy
    // Energy > .7 | Valence > .7 | Dance > .5

    //Criteria for gloomy
    //Energy < .7 | Valence < .5 | Dance < .7

    //Criteria for bops
    //Popularity > .8 | Valence > .6

    //Criteria for dance
    //Energy > .8 | Dance > .8

    //Criteria for study
    //Energy < .6 OR Speech > .7 OR Accoustic > .8 

    var result = [{mood: "happy", tracks: 0},
                    {mood: "gloomy", tracks: 0},
                    {mood: "bops", tracks: 0},
                    {mood: "dance", tracks: 0}, 
                    {mood: "study", tracks: 0}];

    data.forEach(element => {
        if (parseFloat(element.energy) > .6 && parseFloat(element.valence) > .6 && parseFloat(element.danceability) > .5) {
            result[0].tracks += 1;
        }
        if (parseFloat(element.energy) < .5 && parseFloat(element.valence) < .5 && parseFloat(element.danceability) < .5) {
            result[1].tracks += 1;
        }
        if (parseFloat(element.popularity) > 80 && parseFloat(element.valence) > .6) {
            result[2].tracks += 1;
        }
        if (parseFloat(element.energy) > .8 && parseFloat(element.danceability) > .8) {
            result[3].tracks += 1;
        }
        if (parseFloat(element.energy) < .6 && parseFloat(element.speechiness) > .7 && parseFloat(element.accousicness) > .8) {
            result[4].tracks += 1;
        }
    });
    console.log(result);

    return result;
}