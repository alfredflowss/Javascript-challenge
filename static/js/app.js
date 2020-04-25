//extracting table from data file 
var ufotable = data

//using d3 to locate the table value
var table = d3.select("table");
addtbody = table.append("tbody")

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

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#filter list-group-item");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var filteredData = ufotable.filter(record => record.atetime === inputValue);
}`);
};