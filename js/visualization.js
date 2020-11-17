// Immediately Invoked Function Expression to limit access to our 
// variables and prevent 
((() => {

  d3.csv('data/john_liked_songs.csv').then(data => {
    //add stuff here
    //also need to figure out how to add all 4 data sources. 
    //or combine data source into 1 cvs?

    let aditi_liked_songs_table = table();
    //.selectionDispatcher(d3.dispatch(dispatchString))
   // ('#table', data);

    let john_piechartlegend = piechartLegend();
    let john_piechartLiked = piechartLiked();
    let john_piechartHosting = piechartHosting();
    let john_piechartAlternative = piechartAlternative();
    let john_piechartAccoustic = piechartAccoustic();
    
    //THIS IS TEST CODE - keshav
<<<<<<< HEAD

=======
    //let keshav_meanPieTest = meanPieTest();
    //let keshav_meanPieLegend = testLegend();
>>>>>>> e934bc71c1e203c1154015fe347ca17c6595d31a

    //let john_liked_songs_pie = piecharts();

  })
})());