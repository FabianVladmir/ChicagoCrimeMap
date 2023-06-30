import {fetchDataChicago} from './APIChicagoCrime.js';

const btnChicagoMap = document.querySelector('#btnChicagoMap');
btnChicagoMap.addEventListener('click', showMapChicago);

async function showMapChicago (){
    try {
        const dataChicago = await fetchDataChicago();
        alert("Retrieved " + dataChicago.length + " records from the dataset!");
        
        // console.log(dataChicago.info());
        console.log(dataChicago[0])
        

       
      } catch (error) {
        console.log(error)
      }
}