function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

// function optionChanged(newSample) {
//   console.log(newSample);
// }

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");
    PANEL.html("");

    // console.log(Object.entries(result)[0]);
    
    Object.entries(result).forEach(([demographic, dmgValue]) => {
      PANEL.append("h6").text(demographic.toUpperCase() + " : " + dmgValue);
    });
  });
}
  //  Object.entries(filters).forEach(([key, value]) => {
  //     filteredData = filteredData.filter(row => row[key] === value); });

    // {'a':1}
    // ['a', 1]

    // dmgresult.forEach(([key, value]) => console.log(first
    //   + ": " + second));

    // PANEL.append("h6").text(result.id);
    // PANEL.append("h6").text(result.ethnicity);
    // PANEL.append("h6").text(result.gender);
    // PANEL.append("h6").text(result.age);
    // PANEL.append("h6").text(result.location);
    // PANEL.append("h6").text(result.bbtype);
    // PANEL.append("h6").text(result.wfreq);
