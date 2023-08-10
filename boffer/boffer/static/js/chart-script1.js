Sector - Intensity:
Label: "Sector"
Value: "Energy"
Topic - Intensity:
Label: "Topic"
Value: "Gas"
Region - Intensity:
Label: "Region"
Value: "Eastern Asia"
Country - Intensity:
Label: "Country"
Value: "Australia"
Relevance - Intensity:
Label: "Relevance"
Value: 4
PESTLE - Intensity:
Label: "PESTLE"
Value: "Political"
Likelihood - Intensity:
Label: "Likelihood"
Value: 4
Topic - Relevance:
Label: "Topic"
Value: "Oil"
Region - Relevance:
Label: "Region"
Value: "Northern America"
Country - Relevance:
Label: "Country"
Value: "South Africa"

// var data2 = {
//     labels: ['X', 'Y', 'Z', 'W', 'V'],
//     datasets: [{
//         label: 'Data Set 2',
//         data: [8, 8, 8, 8, 13],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1
//     }]
// };

// // Get canvas elements by their IDs
// var ctx1 = document.getElementById('chart1').getContext('2d');
// var ctx2 = document.getElementById('chart2').getContext('2d');

// var chart1 = new Chart(ctx1, {
//     type: 'radar', // or 'line', 'pie', etc.
//     data: data1,
//     options: {
//         // customize options as needed
//     }
// });
// var chart1 = new Chart(ctx2, {
//     type: 'line', // or 'line', 'pie', etc.
//     data: data2,
//     options: {
//         // customize options as needed
//     }
// });

const url = 'http://127.0.0.1:8000/api/datae';

function fetchData(topic,endYear) {
    const params = new URLSearchParams();
    params.append('topic', topic);
    params.append('end_year', endYear);

    console.log(url + '?' + params.toString())
    
    return fetch(url + '?' + params.toString())
        .then(response => response.json());
}

function datafunction(labels,values){
    return {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: values,
            // backgroundColor: 'rgba(75, 192, 192, 0.2)',
            backgroundColor:['red','blue'],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 0
        }]
    }
}


// var data1 = {
//     labels: ['A', 'B', 'C', 'D', 'E'],
//     datasets: [{
//         label: 'Data Set 1',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1
//     }]
// };

var data2 = {
    labels: ['X', 'Y', 'Z', 'W', 'V'],
    datasets: [{
        label: 'Data Set 2',
        data: [100, 8, 8, 8, 13],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

// Get canvas elements by their IDs
var ctx1 = document.getElementById('chart1').getContext('2d');
var ctx2 = document.getElementById('chart2').getContext('2d');
var ctx3 = document.getElementById('chart3').getContext('2d');

function updateChart(ctx,type) {
    const selectedSector = 'all'
    const selectedEndYear = 'all';

    fetchData(selectedSector,selectedEndYear)
       
        .then(data => {
            const labels = data.map(entry => entry.topic);
            const values = data.map(entry => entry.intensity);
            console.log(labels,"  ",values)
            var chart1 = new Chart(ctx, {
                type: type, 
                data: datafunction(labels,values),
                options: {
                    
                }
            }); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
updateChart(ctx1,'line');
updateChart(ctx3,'radar');


var chart1 = new Chart(ctx2, {
    type: 'line', // or 'line', 'pie', etc.
    data: data2,
    options: {
        // customize options as needed
    }
});