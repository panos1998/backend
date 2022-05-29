document.getElementById('staticBackdrop').addEventListener('show.bs.modal',(event)=>{
 console.log('paok')
 var button = event.relatedTarget;
 var type = button.type;
 //var modal = document.getElementById('staticBackdrop');
 document.getElementById('staticBackdropLabel').textContent= button.getAttribute('data-bmi');

})

document.getElementById('iy4ml').onclick = (event) => {
    document.getElementById('history-container').style.setProperty('display','inline-block','important');
    document.getElementById('hide-button').style.setProperty('display','inline-block','important');
    ;
  };
  readlocalstorage()
  function readlocalstorage(){
    var retrievedata= JSON.parse(localStorage.getItem('records'))
    if (retrievedata === null){
      const kouti = document.getElementById('history-container')
      kouti.children[0].remove();
      console.log("empty array")}
    else {
        const container = document.getElementById('history-container');
        const record = document.getElementById('history-record');
        if(!Array.isArray(retrievedata)){
            retrievedata = [retrievedata]
        /*for(const [key,value] of Object.entries(retrievedata)){
            record.setAttribute('data-'+key+"", ''+value+'');*/
        }
        /*const clone = record.cloneNode(true);
        clone.textContent = record.getAttribute('data-dt');
        container.appendChild(clone);
        console.log(retrievedata);
        container.children[0].remove()}*/
      //else {
        retrievedata.forEach(element => {
          const clone = record.cloneNode(true);
          for (const [key, value] of Object.entries(element)){
            clone.setAttribute('data-'+key+'', ''+value+'');
          }
          clone.innerHTML = clone.getAttribute('data-dt')+" <br>"+clone.getAttribute('data-prob');
          container.appendChild(clone);
          console.log(element)
        }
                            );
        container.children[0].remove()
      }
   } 
  //}
  document.getElementById('hide-button').onclick = (event) => {
    document.getElementById('history-container').style.setProperty('display','none','important');
  };
  document.getElementById('izxo').onclick = (event) => {
    event.preventDefault();
    {
      window.document.location = 'https://biomedicalapp.herokuapp.com/';
    }
  };
  document.getElementById('itked').onclick = (event) => {
    event.preventDefault();
    {
      window.document.location = 'https://biomedicalapp.herokuapp.com/assess';
    }
  };
  document.getElementById('i5z9m').onclick = (event) => {
    event.preventDefault();
    {
      window.document.location = 'https://biomedicalapp.herokuapp.com/history/';
    }
  };
  window.onload = () => {
  };
  