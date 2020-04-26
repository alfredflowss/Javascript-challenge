//extracting table from data file 
var ufotable = data


var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-group");

var table = d3.select("table");
addtbody = table.append("tbody")

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  //console.log(inputElement);
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var filteredData = [ufotable.filter(record => record.datetime === inputValue)];
  filteredData.forEach((record) => {
    //add a new row for each object
    var row = addtbody.append("tr");
    //looping through every object 
    Object.entries(record).forEach(([key, value]) => {
        //adding cells th element to html 
         var cell = row.append("th");
         //adding cell text value to html
          cell.text(value);
        });  
});
};

var inputElement = d3.select("#datetime");
  //console.log(inputElement);
  // Get the value property of the input element
var inputValue = inputElement.property("value");
// Create event handlers 

if (inputValue != ""){
button.on("click", runEnter);
form.on("submit",runEnter);
//using d3 to locate the table value
}
else{
//looping through my lis of object s
ufotable.forEach((record) => {
    //add a new row for each object
    var row = addtbody.append("tr");
    //looping through every object 
    Object.entries(record).forEach(([key, value]) => {
        //adding cells th element to html 
         var cell = row.append("th");
         //adding cell text value to html
          cell.text(value);
        })  
});
};
