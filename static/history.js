document.getElementById('iy4ml').onclick = (event) => {
    document.getElementById('history-container').style.setProperty('display','inline-block','important');
    document.getElementById('hide-button').style.setProperty('display','inline-block','important');
    readlocalstorage();
  };
  function readlocalstorage(){
    var retrievedata= JSON.parse(localStorage.getItem('records'))
    if (retrievedata === null){
      console.log("empty array")}
    else if(!Array.isArray(retrievedata)){
      console.log(retrievedata)}
    else {
      retrievedata.forEach(element => {
        console.log(element)
      }
                          );
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
  