# Plotly and the Great Belly Button Controversy
Exploring magical belly button bacteria with JavaScript and Plotly, using  Bootstrap, D3 and of course HTML.

### Contents: 

1. Project Description.
2. List of attachments.

### 1 -Project Description.  

The overall objective of this module was to create a web site that allows a fictional Biologist to explore sampled bacteria data gathered from many individuals.

The web allows the Biologist to select a subject id from a pulldown menu. This selection returns: 

1. Demographic info on the individual.
2. A a bar chart listing the top ten bacteria found in this bellybutton.
3. A  bubble chart showing all bacteria found in the sample, with bubble markers  showing the count of each bacteria. 

### 2 -List of attachments

1. index.html - Contains the root web page using Bootstrap and calls to the plots. js.
2. plots - Contains the application code that:
   1. reads the sample data.
   2. initializes the web with data from sample of first subject.
   3. provides a pull down menu for sample selection.
   4. returns the demographic data in a panel.
   5. returns the top ten found bacteria in a bar chart
   6. returns count of all found bacteria in a bubble char.
3. samples.json - Contains the data used for this application.
4. README.md - Contains this document.