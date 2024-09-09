'use strict'
let filter=()=>{
    let specialization =document.getElementById('special-search').value;
    let docList = document.getElementsByClassName('card');

    for(let i=0;i<docList.length;i++){
            docList[i].style.display="flex";
        }
    
    if(specialization !== 'all'){
        for(let i=0;i<docList.length;i++){
            if(docList[i].getAttribute('data-speciality') !== specialization){
                docList[i].style.display="none";
            }
        }

    }
}
document.getElementById("special-search").addEventListener('change',filter);