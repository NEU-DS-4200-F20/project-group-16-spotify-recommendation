function moodEval(data) { 
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
        if (parseFloat(element.energy) > .5 && parseFloat(element.valence) > .6 && parseFloat(element.danceability) > .5) {
            result[0].tracks += 1;
        }
        if (parseFloat(element.energy) < .6 && parseFloat(element.valence) < .6 && parseFloat(element.danceability) < .5) {
            result[1].tracks += 1;
        }
        if (parseFloat(element.popularity) > 68 && parseFloat(element.valence) > .6) {
            result[2].tracks += 1;
        }
        if (parseFloat(element.energy) > .6 && parseFloat(element.danceability) > .6) {
            result[3].tracks += 1;
        }
        if (parseFloat(element.energy) < .6 && parseFloat(element.acousticness) > .8) {
            result[4].tracks += 1;
        }
    });
    console.log(result);

    return result;
}

function meanAtt(data) { 

    //Create dictionary to hold all attribute means
    var meanResult = [{axis: "danceability", value: 0},
                  {axis: "energy", value: 0},
                  {axis: "speechiness", value: 0},
                  {axis: "acousticness", value: 0},
                  {axis: "popularity", value: 0},
                  {axis: "liveness", value: 0},
                  {axis: "valence", value: 0}];
  
    // set all placeholder values for each attribute to 0
    var mDance = 0;
    var mEnergy = 0;
    var mSpeech = 0;
    var mAcoustic = 0;
    var mPop = 0;
    var mLive = 0;
    var mVal = 0;
  
    // go through each row in the given data and get totals for each attribute
    data.forEach(element => {
      mDance += parseFloat(element.danceability)
      mEnergy += parseFloat(element.energy)
      mSpeech += parseFloat(element.speechiness)
      mAcoustic += parseFloat(element.acousticness)
      mPop += parseFloat(element.popularity)
      mLive += parseFloat(element.liveness)
      mVal += parseFloat(element.valence)
    })
  
    // divide all attributes by the amount of rows in the data to find the mean
    // then add these results to the meanResult dictionary
    // round all results to 2 decimal places
    meanResult[0].value = (mDance / data.length).toFixed(2);
    meanResult[1].value = (mEnergy / data.length).toFixed(2);
    meanResult[2].value = (mSpeech / data.length).toFixed(2);
    meanResult[3].value = (mAcoustic / data.length).toFixed(2);
    meanResult[4].value = ((mPop / data.length) / 100).toFixed(2);
    meanResult[5].value = (mLive / data.length).toFixed(2);
    meanResult[6].value = (mVal / data.length).toFixed(2);
  
    // log in console to test results
    console.log(meanResult);
    
    // return the end result
    return meanResult;
  }

function getData(data, playlist, mood) {
    if (playlist === 'all') {
        return filterByMood(data, mood);
    }
    else {
        return filterByMood(filterByPlaylist(data, playlist), mood);
    }
}


function filterByMood(csvData, mood) {
var result = [];
if (mood === 'all') {
    result = csvData;
}
else {
    csvData.forEach(element => {
        if (mood === 'happy' && filterByMoodHelper(mood, element)) {
            result.push(element);
        }
        else if (mood === 'gloomy' && filterByMoodHelper(mood, element)) {
            result.push(element);
        }
        else if (mood === 'bops' && filterByMoodHelper(mood, element)) {
            result.push(element);
        }
        else if (mood === 'dance' && filterByMoodHelper(mood, element)) {
            result.push(element);
        }
        else if (mood === 'study' && filterByMoodHelper(mood, element)) {
            result.push(element);
        }
    });
}
return result;
}

function filterByMoodHelper(mood, element) { 
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

        if (mood === 'happy' && parseFloat(element.energy) > .5 && parseFloat(element.valence) > .6 && parseFloat(element.danceability) > .5) {
            console.log('filter');
            return true;
        }
        if (mood === 'gloomy' && parseFloat(element.energy) < .6 && parseFloat(element.valence) < .6 && parseFloat(element.danceability) < .5) {
            return true;
        }
        if (mood === 'bops' && parseFloat(element.popularity) > 68 && parseFloat(element.valence) > .6) {
            return true;
        }
        if (mood === 'dance' && parseFloat(element.energy) > .6 && parseFloat(element.danceability) > .6) {
            return true;
        }
        if (mood === 'study' && parseFloat(element.energy) < .6 && parseFloat(element.acousticness) > .8) {
            return true;
        }
    return false;
}

function buttonSelection(playlist, mood) {
    if (playlist === 'Liked Songs') {
        document.getElementById('liked-button').style.fontWeight = 'bold';
        document.getElementById('hosting-button').style.fontWeight = 'normal';
        document.getElementById('alt-button').style.fontWeight = 'normal';
        document.getElementById('acoustic-button').style.fontWeight = 'normal';

        document.getElementById('liked-button').style.height = '75px';
        document.getElementById('hosting-button').style.height = '60px';
        document.getElementById('alt-button').style.height = '60px';
        document.getElementById('acoustic-button').style.height = '60px';
    }
    else if (playlist === 'Hosting 2020') {
        document.getElementById('liked-button').style.fontWeight = 'normal';
        document.getElementById('hosting-button').style.fontWeight = 'bold';
        document.getElementById('alt-button').style.fontWeight = 'normal';
        document.getElementById('acoustic-button').style.fontWeight = 'normal';

        document.getElementById('liked-button').style.height = '60px';
        document.getElementById('hosting-button').style.height = '70px';
        document.getElementById('alt-button').style.height = '60px';
        document.getElementById('acoustic-button').style.height = '60px';
    }
    else if (playlist === 'No Other Alternatives') {
        document.getElementById('liked-button').style.fontWeight = 'normal';
        document.getElementById('hosting-button').style.fontWeight = 'normal';
        document.getElementById('alt-button').style.fontWeight = 'bold';
        document.getElementById('acoustic-button').style.fontWeight = 'normal';

        document.getElementById('liked-button').style.height = '60px';
        document.getElementById('hosting-button').style.height = '60px';
        document.getElementById('alt-button').style.height = '70px';
        document.getElementById('acoustic-button').style.height = '60px';
    }
    else if (playlist === 'Midnight Acoustics') {
        document.getElementById('liked-button').style.fontWeight = 'normal';
        document.getElementById('hosting-button').style.fontWeight = 'normal';
        document.getElementById('alt-button').style.fontWeight = 'normal';
        document.getElementById('acoustic-button').style.fontWeight = 'bold';    

        document.getElementById('liked-button').style.height = '60px';
        document.getElementById('hosting-button').style.height = '60px';
        document.getElementById('alt-button').style.height = '60px';
        document.getElementById('acoustic-button').style.height = '70px';
    }

    document.getElementById('happy-button').style.fontWeight = 'normal';
    document.getElementById('gloomy-button').style.fontWeight = 'normal';
    document.getElementById('bops-button').style.fontWeight = 'normal';
    document.getElementById('dance-button').style.fontWeight = 'normal';
    document.getElementById('study-button').style.fontWeight = 'normal';

    document.getElementById('happy-button').style.height = '50px';
    document.getElementById('gloomy-button').style.height = '50px';
    document.getElementById('bops-button').style.height = '50px';
    document.getElementById('dance-button').style.height = '50px';
    document.getElementById('study-button').style.height = '50px';

    if (!(mood === 'none')) {   
        if (mood === 'Happy') {
            document.getElementById('happy-button').style.fontWeight = 'bold';
            document.getElementById('happy-button').style.height = '60px';
        }
        else if (mood === 'Gloomy') {
            document.getElementById('gloomy-button').style.fontWeight = 'bold';
            document.getElementById('gloomy-button').style.height = '60px';
        }

        else if (mood === 'Bops') {
            document.getElementById('bops-button').style.fontWeight = 'bold';
            document.getElementById('bops-button').style.height = '60px';
        }

        else if (mood === 'Dance') {
            document.getElementById('dance-button').style.fontWeight = 'bold';
            document.getElementById('dance-button').style.height = '60px';
        }

        else if (mood === 'Study') {
            document.getElementById('study-button').style.fontWeight = 'bold';
            document.getElementById('study-button').style.height = '60px';
        }
    }
}