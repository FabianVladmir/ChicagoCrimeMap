import {fetchDataChicago} from './APIChicagoCrime.js'

const btnChicagoMap = document.querySelector('#btnChicagoMap');

console.log(btnChicagoMap);

btnChicagoMap.addEventListener('click', showMapChicago);



async function showMapChicago (){
    try {
        const dataChicago = await fetchDataChicago();
        alert("Retrieved " + dataChicago.length + " records from the dataset!");
        //const dataJSON = await dataChicago.response()
        console.log(dataChicago);
        //console.log(dataJSON)
        // Process the retrieved data further if needed
      } catch (error) {
        console.log(error)
      }
}