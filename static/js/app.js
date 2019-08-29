// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// identify the button and entry field, collect date when button pressed
var button = d3.select("#filter-btn");
var DateField = d3.select("#datetime");
button.on("click", function() {
    var inputDate = DateField.property("value");
// filter data set based on input date
    var resultSet = tableData.filter(event => event.datetime === inputDate);
    console.log(resultSet);
// wipe existing data from table
    document.getElementById("output").innerHTML = "";
// for each event object in the filtered set create a row and fill cells with the value for each key
    resultSet.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        })
    })
})