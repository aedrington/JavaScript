// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn")

submit.on("click", function() {

  // Prevent the page from refreshing
d3.event.preventDefault();

  // Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
  
data.forEach(function(data) {
    console.log(data);
});
 
data.forEach(function(data) {
  console.log(data);
  var row = tbody.append("tr");
});
 
data.forEach(function(data) {
  console.log(data);
  var row = tbody.append("tr");
 
Object.entries(data).forEach(function([key, value]) {
    console.log(key, value);

    var cell = tbody.append("td");
  });
