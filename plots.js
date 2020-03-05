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
    buildCharts(sampleNames[0]);
    buildMetadata(sampleNames[0]);
})}

init();

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
  
    Object.entries(result).forEach(([demographic, dmgValue]) => {
      PANEL.append("h6").text(demographic.toUpperCase() + " : " + dmgValue);
    });
  });
}

function buildCharts(sample){
  d3.json("samples.json").then((data) => {
      var samples = data.samples;
      var resultArray = samples.filter(sampleData => sampleData.id == sample);
      var result = resultArray[0];
      var otuIds = result.otu_ids;
      var otuLabels = result.otu_labels;
      var sampleValues = result.sample_values;
      var filteredData = otuIds.slice(0, 10).map(barChart =>  `OTU ${barChart}`).reverse();
      //Bar Chart
      var trace = {
          x: sampleValues.slice(0, 10).reverse(),
          y: filteredData,
          text: otuLabels.slice(0, 10).reverse(),
          type: "bar",
          orientation: 'h',
          marker: {
            color: 'rgb(142,124,195)'
            }

      };
      var data = [trace];
      var layout = {
          title: "Top 10 Belly Button Bacterias",
          xaxis: { title: "OTU Bacteria Counts"}
                  };
      Plotly.newPlot("bar", data, layout);
      
      // Now the Bubble Chart
      var bubbleFilteredData = otuIds.map(bubbleChart => bubbleChart);
      var trace2 = {
        x: bubbleFilteredData,
        y: sampleValues,
        text: otuLabels,
        mode: 'markers',
        marker: {
          size: sampleValues,
          color: otuIds
          }
      };
      var data2 = [trace2];
      
      var layout2 = {
        title: 'OTU Bacteria Counts',
        showlegend: false,
        xaxis: { title: "OTU ID"},
        yaxis: { title: "OTU Counts"}
      };
    Plotly.newPlot('bubble', data2, layout2);
  });
} 