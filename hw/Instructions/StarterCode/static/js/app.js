// from data.js
var tableData = data;

//Sourcing the Data
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
var inputField1 = d3.select("#datetime");
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");
var reset = d3.select("#reset-btn")
var populate = (dataInput) => {
  dataInput.forEach(ufoSightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufoSightings[column])
    )
  });
}

populate(data);

//Filters
button.on("click", () => {
  d3.event.preventDefault();
  var inputDate = inputField1.property("value").trim();
 
  var filterDate = data.filter(data => data.datetime === inputDate);
  console.log(filterDate)

  tbody.text("");
  let response = {
    filterDate
  }
  if (response.filterDate.length !== 0) {
    populate(filterDate);
  }
})