// Immediately Invoked Function Expression to limit access to our 
// variables and prevent 
((() => {

  d3.csv('data/john_liked_songs.csv').then(date => {
    //add stuff here
    //also need to figure out how to add all 4 data sources. 
    //or combine data source into 1 cvs?

    let john_piechartlegend = piechartLegend();
    let john_piechartLiked = piechartLiked();
    let john_piechartHosting = piechartHosting();
    let john_piechartAlternative = piechartAlternative();
    let john_piechartAccoustic = piechartAccoustic();


  })
})());