//extracting table from data file 
var ufotable = data

//selecting  the button 
var button = d3.select("#filter-btn");

// Selecting the form
var form = d3.select("#form-group");
//getting the tbody section 
var addtbody = d3.select("tbody");

// Complete the event handler function for the form
function runEnter() {
  //setting filtered data to extracted data file
  var filteredData = ufotable 
  // Select the input element and get the raw HTML  based off #datetime id 
 function propinput(name){ 
    var inputElement = d3.select(`${name}`);
  // Getting the value property of the input element
  return inputValue = inputElement.property("value");
 };
  
  //if statement to handle filtering 
  if (propinput("#datetime") != "") {
        //filter data based off input value
        filteredData = filteredData.filter(record => record.datetime === inputValue);
        //ensure the table body is blank 
        addtbody.html("");
        //loop through each reord 
        filteredData.forEach((record) => {
          //add a new row for each object
          var row = addtbody.append("tr").attr('class', 'table-row');
          //looping through every object 
          Object.entries(record).forEach(([key, value]) => {
              //adding cells th element to html 
              var cell = row.append("th");
              //adding cell text value to html
                cell.text(value);
              });  
          });
  }
  
  //check to see if cityis blank 
  else if (propinput("#City") != "") {
        //filter data based off input value
        filteredData = filteredData.filter(record => record.city === inputValue);
        //ensure the table body is blank 
        addtbody.html("");
        //loop through each reord 
        filteredData.forEach((record) => {
          //add a new row for each object
          var row = addtbody.append("tr").attr('class', 'table-row');
          //looping through every object 
          Object.entries(record).forEach(([key, value]) => {
              //adding cells th element to html 
              var cell = row.append("th");
              //adding cell text value to html
                cell.text(value);
              });  
          });
  }

  else if (propinput("#state") != "") {
        //filter data based off input value
        filteredData = filteredData.filter(record => record.state === inputValue);
        //ensure the table body is blank 
        addtbody.html("");
        //loop through each reord 
        filteredData.forEach((record) => {
          //add a new row for each object
          var row = addtbody.append("tr").attr('class', 'table-row');
          //looping through every object 
          Object.entries(record).forEach(([key, value]) => {
              //adding cells th element to html 
              var cell = row.append("th");
              //adding cell text value to html
                cell.text(value);
            });  
        });
  }
else if (propinput("#country") != "") {
      //filter data based off input value
      filteredData = filteredData.filter(record => record.country === inputValue);
      //ensure the table body is blank 
      addtbody.html("");
      //loop through each reord 
      filteredData.forEach((record) => {
        //add a new row for each object
        var row = addtbody.append("tr").attr('class', 'table-row');
        //looping through every object 
        Object.entries(record).forEach(([key, value]) => {
            //adding cells th element to html 
            var cell = row.append("th");
            //adding cell text value to html
              cell.text(value);
            });  
        });
}
else if (propinput("#shape") != "") {
      //filter data based off input value
      filteredData = filteredData.filter(record => record.shape === inputValue);
      //ensure the table body is blank 
      addtbody.html("");
      //loop through each reord 
      filteredData.forEach((record) => {
        //add a new row for each object
        var row = addtbody.append("tr").attr('class', 'table-row');
        //looping through every object 
        Object.entries(record).forEach(([key, value]) => {
            //adding cells th element to html 
            var cell = row.append("th");
            //adding cell text value to html
              cell.text(value);
            });  
       });
}
  else{
    index();
  }
};

//creating hompe page function
function index() {
ufotable.forEach((record) => {
    //add a new row for each object
    var row = addtbody.append("tr").attr('class', 'table-row');
    //looping through every object 
    Object.entries(record).forEach(([key, value]) => {
        //adding cells th element to html 
         var cell = row.append("th");
         //adding cell text value to html
          cell.text(value);
        })  
    });
};

index();

//set listener
button.on("click", runEnter);

