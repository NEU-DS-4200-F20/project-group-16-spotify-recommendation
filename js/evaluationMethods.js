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
        if (parseFloat(element.energy) < .6 && parseFloat(element.speechiness) > .7 && parseFloat(element.acousticness) > .8) {
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