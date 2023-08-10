

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
            borderWidth: 1
        }]
    }
}




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
var ctx4 = document.getElementById('chart4').getContext('2d');
var ctx5 = document.getElementById('chart5').getContext('2d');
var ctx6 = document.getElementById('chart6').getContext('2d');
var ctx7 = document.getElementById('chart7').getContext('2d');
var ctx8 = document.getElementById('chart8').getContext('2d');

function updateChart(ctx,type,options) {
    const selectedSector = 'all'
    const selectedEndYear = 'all';

    fetchData(selectedSector,selectedEndYear)
       
        .then(data => {
            const labels = data.map(entry => entry.country);
            const values = data.map(entry => entry.intensity);
            console.log(labels,"  ",values)
            var chart1 = new Chart(ctx, {
                type: type, 
                data: datafunction(labels,values),
                options:{
                    
                        legend: {
                          display: false
                        }
                      
                  
                }
                    
                
            }); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


updateChart(ctx1,'line');
updateChart(ctx2,'pie')
updateChart(ctx3,'radar');
updateChart(ctx4,'doughnut');
updateChart(ctx5,'polarArea');
// updateChart(ctx6,'scatter');
// updateChart(ctx7,'bar');

updateChart(ctx8,'horizontalBar');







function fetchData6(topic,endYear) {
    const params = new URLSearchParams();
    params.append('topic', topic);
    params.append('end_year', endYear);

    console.log(url + '?' + params.toString())
    
    return fetch(url + '?' + params.toString())
        .then(response => response.json());
}
function datafunction6(labels, values, radii, colors) {
    return {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: values.map((value, index) => ({
                x: value,
                y: index, 
                r: radii[index] 
            })),
            backgroundColor: colors, 
        }]
    };
}

function updateChart6(ctx, type) {
    const selectedSector = 'all';
    const selectedEndYear = 'all';

    fetchData6(selectedSector, selectedEndYear)
        .then(data => {
            const labels = data.map(entry => entry.topic);
            const values = data.map(entry => entry.intensity);
            const radii = data.map(entry => entry.radiusValue); // Replace 'radiusValue' with the actual property name
            const colors = generateRandomColors(data.length); // Generate an array of random colors

            var chart1 = new Chart(ctx, {
                type: type,
                data: datafunction6(labels, values, radii, colors),
                options: {}
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function generateRandomColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
        colors.push(color);
    }
    return colors;
}

updateChart6(ctx6, 'bubble');


// ................................................7......................................  //

function fetchData7(topic,endYear) {
    const params = new URLSearchParams();
    params.append('topic', topic);
    params.append('end_year', endYear);

    console.log(url + '?' + params.toString())
    
    return fetch(url + '?' + params.toString())
        .then(response => response.json());
}
function datafunction7(labels, values,colors) {
    return {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: values,
            backgroundColor: colors, 
        }]
    };
}

function updateChart7(ctx, type) {
    const selectedSector = 'all';
    const selectedEndYear = 'all';

    fetchData7(selectedSector, selectedEndYear)
        .then(data => {
            const labels = data.map(entry => entry.country);
            const values = data.map(entry => entry.intensity);
            const colors = generateRandomColors(data.length); 

            var chart1 = new Chart(ctx, {
                type: type,
                data: datafunction7(labels, values, colors),
                options: {}
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function generateRandomColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
        colors.push(color);
    }
    return colors;
}

updateChart7(ctx5, 'bar');