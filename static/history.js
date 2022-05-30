document.getElementById('staticBackdrop').addEventListener('show.bs.modal',(event)=>{
    console.log('paok')
    var button = event.relatedTarget;
    var details = {"Age": button.getAttribute('data-age'),"BMI":button.getAttribute('data-bmi'),
    "Waist-circ":button.getAttribute('data-waist'),"Veg-Fruit":button.getAttribute('data-vegfruit'),
    "Protein":button.getAttribute('data-protein'),"Date":button.getAttribute('data-dt'),
    "Risk probability":button.getAttribute('data-prob')};
    var list = document.getElementById('display-card').children[1]
    list.style.setProperty('list-style', 'none', 'important')
    var display_card = document.getElementById('display-card');
    console.log(list);
    console.log(display_card);
    for ([key, value] of Object.entries(details)){
      var list_item = document.createElement('li');
      list_item.appendChild(document.createTextNode(""+key+": "+value+""));
      list.appendChild(list_item);
    }
  }
                                                            )
  document.getElementById('staticBackdrop').addEventListener('hide.bs.modal', (event)=>{
    var list = document.getElementById('display-card').children[1]
    list.innerHTML="";
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
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  