// Immediately Invoked Function Expression to limit access to our 
// variables and prevent 
((() => {

  d3.csv('data/john_liked_songs.csv').then(data => {
    //add stuff here
    //also need to figure out how to add all 4 data sources. 
    //or combine data source into 1 cvs?

    let tblAllData = table()
    //.selectionDispatcher(d3.dispatch(dispatchString))
    ('#table', data);

    let john_liked_songs_pie = piecharts();

  })
})());