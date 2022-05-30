document.getElementById('staticBackdrop').addEventListener('show.bs.modal',(event)=>{
    console.log('paok')
    var button = event.relatedTarget;
    var type = button.type;
    //var modal = document.getElementById('staticBackdrop');
    document.getElementById('staticBackdropLabel').textContent= button.getAttribute('data-bmi');
  }
                                                            )
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
      }
      retrievedata.forEach(element => {
        const clone = record.cloneNode(true);
        for (const [key, value] of Object.entries(element)){
          clone.setAttribute('data-'+key+'', ''+value+'');
          if(clone.getAttribute('data-prob')<0.5){
            clone.style.setProperty('background-color','lightgreen', 'important');
          }
          else {
            clone.style.setProperty('background-color', 'coral', 'important');
          }
        }
        clone.textContent = clone.getAttribute('data-prob');
        container.appendChild(clone);
        console.log(element)
      }
                          );
      container.children[0].remove()
    }
  }
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
  