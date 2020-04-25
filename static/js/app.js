//extracting table from data file 
var ufotable = data

// datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: 
var table = d3.select("table");
addtbody = table.append("tbody")
ufotable.forEach((record) => {
    //add a new row for each object
    var row = addtbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
         var cell = row.append("th");
          cell.text(value);
        })  
});

