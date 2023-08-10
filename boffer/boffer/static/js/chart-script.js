const url = 'http://127.0.0.1:8000/api/datae';

const sectorOptions = {
    all:['all'],
    topic: ['gas', 'oil', 'export'],
    endyear:['2017','2018','2019','2020','2021','2022'],
    sector:['Retail','Manufacturing'],
    pestle:['Economic','Political'],
    region:['World','Western Asia'],
    likelihood:['2','3','4','5','6'],
    start_year:['2017','2018','2019','2020','2021'],
    relevance:['2','3','4','5','6'],
    country:['India','Russia','Saudi Arabia']
};

const allFilter = []; 
const topicFilter=[];
const applyFiltersButton=[];
let title=[];

for (let i = 1; i <= 8; i++) {
    allFilter[i] = document.getElementById(`allFilter${i}`);
    topicFilter[i] = document.getElementById(`topicFilter${i}`);
    allFilter[i].addEventListener('change', () => updateTopicOptions(i));
    
    // title[i] = document.querySelector(`.title${i}`);
    
    console.log(title[i].textContent);

    applyFiltersButton[i] = document.getElementById(`applyFilters${i}`);
}



        function updateTopicOptions(index) {
            const selectedSector = allFilter[index].value;
            const options = sectorOptions[selectedSector] || [];

            topicFilter[index].innerHTML = '';

        
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                topicFilter[index].appendChild(optionElement);
            });
        }
for (let i = 1; i <= 8; i++) {
    updateTopicOptions(i);
}

const sectorFilter=[];

for(let i=1;i<=8;i++)
 sectorFilter[i] = document.getElementById(`topicFilter${i}`);






// function fetchData(topic,endYear) {
//     const params = new URLSearchParams();
//     params.append('topic', topic);
//     params.append('end_year', endYear);

//     console.log(url + '?' + params.toString())
    
//     return fetch(url + '?' + params.toString())
//         .then(response => response.json());
// }

// function datafunction(labels,values){
//     return {
//         labels: labels,
//         datasets: [{
//             label: 'Values',
//             data: values,
//             // backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             backgroundColor:['red','blue'],
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1
//         }]
//     }
// }

// function updateChart(ctx,type,options) {
//     // const selectedSector = sectorFilter1.value;
//     const selectedSector = 'all';
//     const selectedEndYear = 'all';

//     fetchData(selectedSector,selectedEndYear)
       
//         .then(data => {
//             const labels = data.map(entry => entry.country);
//             const values = data.map(entry => entry.intensity);
//             console.log(labels,"  ",values)
//             var chart1 = new Chart(ctx, {
//                 type: type, 
//                 data: datafunction(labels,values),
//                 options:{
                    
//                         legend: {
//                           display: false}
//                 } 
//             }); 
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });}

options={
                    
        legend: {
        display: false}
} 
var ctx1 = document.getElementById('chart1').getContext('2d');
var ctx2 = document.getElementById('chart2').getContext('2d');
var ctx3 = document.getElementById('chart3').getContext('2d');
var ctx4 = document.getElementById('chart4').getContext('2d');
var ctx5 = document.getElementById('chart5').getContext('2d');
var ctx6 = document.getElementById('chart6').getContext('2d');
var ctx7 = document.getElementById('chart7').getContext('2d');
var ctx8 = document.getElementById('chart8').getContext('2d');



applyFiltersButton[1].addEventListener('click', function(){
    updateChart1(ctx1,'bar')
});

function fetchData1(search) {
    const params = new URLSearchParams();
    params.append(allFilter[1].value, search);
    // params.append('end_year', endYear);

    console.log(url + '?' + params.toString())
    
    return fetch(url + '?' + params.toString())
        .then(response => response.json());
}
function datafunction1(labels, values,colors) {
    return {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: values,
            backgroundColor: colors, 
        }]
    };
}
function updateChart1(ctx, type) {
    const selectedSector = sectorFilter[5].value;
    fetchData1(selectedSector)
        .then(data => {
            const labels = data.map(entry => entry.sector);
            const values = data.map(entry => entry.intensity);
            const colors = generateRandomColors(data.length); 
            
            title[1].textContent = titleElement.textContent.replace('chart1', `${labels}--${values}`);
             var chart=new Chart(ctx, {
                type: type,
                data: datafunction1(labels, values, colors),
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

updateChart1(ctx1,'line');
//............................................................2...................................................//
applyFiltersButton[2].addEventListener('click', function(){
    updateChart2(ctx2,'bar')
});


function fetchData2(search) {
    const params = new URLSearchParams();
    params.append(allFilter[2].value, search);
    // params.append('end_year', endYear);

    console.log(url + '?' + params.toString())
    
    return fetch(url + '?' + params.toString())
        .then(response => response.json());
}
function datafunction2(labels, values,colors) {
    return {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: values,
            backgroundColor: colors, 
        }]
    };
}
function updateChart2(ctx, type,options) {
    const selectedSector = sectorFilter[5].value;
    fetchData2(selectedSector)
        .then(data => {
            const labels = data.map(entry => entry.topic);
            const values = data.map(entry => entry.likelihood);
            const colors = generateRandomColors(data.length); 

             var chart=new Chart(ctx, {
                type: type,
                data: datafunction2(labels, values, colors),
                options: options
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

updateChart2(ctx2,'bar')
//........................................................3..........................................................//
applyFiltersButton[3].addEventListener('click', function(){
    updateChart3(ctx3,'bar')
});

function fetchData3(search) {
    const params = new URLSearchParams();
    params.append(allFilter[3].value, search);
    // params.append('end_year', endYear);

    console.log(url + '?' + params.toString())
    
    return fetch(url + '?' + params.toString())
        .then(response => response.json());
}
function datafunction3(labels, values,colors) {
    return {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: values,
            backgroundColor: colors, 
        }]
    };
}
function updateChart3(ctx, type) {
    const selectedSector = sectorFilter[5].value;
    fetchData6(selectedSector)
        .then(data => {
            const labels = data.map(entry => entry.country);
            const values = data.map(entry => entry.intensity);
            const colors = generateRandomColors(data.length); 

             var chart=new Chart(ctx, {
                type: type,
                data: datafunction3(labels, values, colors),
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

updateChart3(ctx3,'radar');
//.......................................4.............................................................//
applyFiltersButton[4].addEventListener('click', function(){
    updateChart4(ctx4,'bar')
});


function fetchData4(search) {
    const params = new URLSearchParams();
    params.append(allFilter[4].value, search);
    // params.append('end_year', endYear);

    console.log(url + '?' + params.toString())
    
    return fetch(url + '?' + params.toString())
        .then(response => response.json());
}
function datafunction4(labels, values,colors) {
    return {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: values,
            backgroundColor: colors, 
        }]
    };
}
function updateChart4(ctx, type) {
    const selectedSector = sectorFilter[4].value;
    fetchData6(selectedSector)
        .then(data => {
            const labels = data.map(entry => entry.likelihood);
            const values = data.map(entry => entry.intensity);
            const colors = generateRandomColors(data.length); 

             var chart=new Chart(ctx, {
                type: type,
                data: datafunction4(labels, values, colors),
                options: {
                    
                    
                                                legend: {
                                                  display: false}
                                        } 
                
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

updateChart4(ctx4,'doughnut');

//............................................5..........................................................//


applyFiltersButton[5].addEventListener('click', function(){
    updateChart5(ctx5,'bar')
});


function fetchData5(search) {
    const params = new URLSearchParams();
    params.append(allFilter[5].value, search);
    // params.append('end_year', endYear);

    console.log(url + '?' + params.toString())
    
    return fetch(url + '?' + params.toString())
        .then(response => response.json());
}
function datafunction5(labels, values,colors) {
    return {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: values,
            backgroundColor: colors, 
        }]
    };
}
function updateChart5(ctx, type) {
    const selectedSector = sectorFilter[5].value;
    fetchData6(selectedSector)
        .then(data => {
            const labels = data.map(entry => entry.region);
            const values = data.map(entry => entry.relevance);
            const colors = generateRandomColors(data.length); 

             var chart=new Chart(ctx, {
                type: type,
                data: datafunction5(labels, values, colors),
                options:{
                    
                                            legend: {
                                              display: false}
                                    } 
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

updateChart5(ctx5,'polarArea');


//.......................................6.......................................................//

applyFiltersButton[6].addEventListener('click', function(){
    updateChart6(ctx6,'bar')
});


function fetchData6(search) {
    const params = new URLSearchParams();
    params.append(allFilter[6].value, search);
    // params.append('end_year', endYear);

    console.log(url + '?' + params.toString())
    
    return fetch(url + '?' + params.toString())
        .then(response => response.json());
}
function datafunction6(labels, values,colors) {
    return {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: values,
            backgroundColor: colors, 
        }]
    };
}
function updateChart6(ctx, type) {
    const selectedSector = sectorFilter[6].value;
    fetchData6(selectedSector)
        .then(data => {
            const labels = data.map(entry => entry.pestle);
            const values = data.map(entry => entry.intensity);
            const colors = generateRandomColors(data.length); 

             var chart=new Chart(ctx, {
                type: type,
                data: datafunction6(labels, values, colors),
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

updateChart6(ctx6, 'line');

// ................................................7.......................................................................  //
applyFiltersButton[7].addEventListener('click', function(){
    updateChart7(ctx7,'bar')
});


function fetchData7(search) {
    const params = new URLSearchParams();
    params.append(allFilter[7].value, search);
    // params.append('end_year', endYear);

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
    const selectedSector = sectorFilter[7].value;
    fetchData7(selectedSector)
        .then(data => {
            const labels = data.map(entry => entry.source);
            const values = data.map(entry => entry.intensity);
            const colors = generateRandomColors(data.length); 

             var chart=new Chart(ctx, {
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

updateChart7(ctx7, 'bar');

//...................................................8.....................................................................//



applyFiltersButton[8].addEventListener('click', function(){
    updateChart8(ctx8,'bar')
});


function fetchData8(search) {
    const params = new URLSearchParams();
    params.append(allFilter[8].value, search);
    // params.append('end_year', endYear);

    console.log(url + '?' + params.toString())
    
    return fetch(url + '?' + params.toString())
        .then(response => response.json());
}
function datafunction8(labels, values,colors) {
    return {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: values,
            backgroundColor: colors, 
        }]
    };
}
function updateChart8(ctx, type) {
    const selectedSector = sectorFilter[8].value;
    fetchData8(selectedSector)
        .then(data => {
            const labels = data.map(entry => entry.country);
            const values = data.map(entry => entry.relevance);
            const colors = generateRandomColors(data.length); 

             var chart=new Chart(ctx, {
                type: type,
                data: datafunction8(labels, values, colors),
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

updateChart8(ctx8,'horizontalBar');

