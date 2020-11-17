function eval(data) { 
  var meanResult = [{attribute: "danceability", mean: 0},
                {attribute: "energy", mean: 0},
                {attribute: "speechiness", mean: 0},
                {attribute: "acousticness", mean: 0},
                {attribute: "instrumental", mean: 0},
                {attribute: "liveness", mean: 0},
                {attribute: "valence", mean: 0}];
  
  data.forEach(element => {
    {meanResult[0].mean = d3.mean(function(d) { return d.danceability; });
    }
    {meanResult[1].mean = d3.mean(function(d) { return d.energy; });
    }
    {meanResult[2].mean = d3.mean(function(d) { return d.speechiness; });
    }
    {meanResult[3].mean = d3.mean(function(d) { return d.acousticness; });
    }
    {meanResult[4].mean = d3.mean(function(d) { return d.instrumental; });
    }
    {meanResult[5].mean = d3.mean(function(d) { return d.liveness; });
    }
    {meanResult[6].mean = d3.mean(function(d) { return d.valence; });
    }
  });
    
  console.log(meanResult);
  
  return meanResult;
}
