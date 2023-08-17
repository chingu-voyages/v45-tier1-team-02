console.log("hello")
// Functionality
//      Search Component

//          User will be able to filter data in the search component by any of the following:
//          Name
//          Year of strike
//          Meteorite composition (recclass)
//          Mass range (e.g. low to high, inclusive)

// 1 => onload call a function which will fetch the data from api 
// 2 => store the result in a variable
// 3 => on search check the type of data we want to fetch (ex : Name,Year of strike,Meteorite composition (recclass),Mass range (e.g. low to high, inclusive))
// 4 => if we found the result then show all the data in table format and if no result found with perticular query we show message "no result found"

function fetchData(){
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')   
    .then(response => response.json())
    .then(res =>console.log(res));
}

fetchData()

