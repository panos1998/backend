document.getElementById('assess-button').textContent='Assess';
document.getElementById('assess-button').onclick = (event) => {
  //get the input variables of the form
  var input = [document.getElementsByName('weight')[0].value, document.getElementsByName('bmi')[0].value, document.getElementsByName('waist')[0].value,  document.getElementsByName('grain')[0].value,  document.getElementsByName('oximetry')[0].value, document.getElementsByName('fruits')[0].value,  document.getElementsByName('protein')[0].value,  document.getElementsByName('vegetables')[0].value,  document.getElementsByName('dairy')[0].value, document.getElementsByName('calories')[0].value];
  let hasNegative = input.some(value=> value<0);
  //check for negative values
  let hasNull = input.some(value=> value=="");
  //check for empty values
  console.log(input)
  if(hasNegative){
    //case negative value detected, create some graphics and present a warning message
    document.getElementById('staticBackdropLabel').textContent="Op!";
    document.getElementById('modal-content').textContent="Please insert positive values";
    document.getElementById('modal-body').style.setProperty('background-color','Khaki',"important");
  }
  else if(hasNull){
    // case empty value detected, create some graphics and present a warning message
    document.getElementById('staticBackdropLabel').textContent="Huh!"
    document.getElementById('modal-content').textContent="You may have forgotten to fill some inputs"
    document.getElementById('modal-body').style.setProperty('background-color','Khaki',"important");
  }
  else{
    //case everything is ok hide the form body
    //document.getElementById('form-box').style.setProperty("display","none","important");
    //save input data into data dictionary-javascript object
    document.getElementById('staticBackdropLabel').textContent="\u2705 Perfect!"
    document.getElementById('modal-content').textContent="Your results will be available right there very soon"
    document.getElementById('modal-body').style.setProperty('background-color','Violet',"important");
    const data = {
      weight:input[0],
      BMI:input[1],
      waist:input[2],
      oxymetry:input[4],
      grain:input[3],
      fruit:input[5],
      vegan:input[7],
      dairy:input[8],
      protein:input[6],
      total_cal:input[9]
    }
    //send data for machine learning through http POST request at appropriate endpoint
    postData("https://biomedicalapp.herokuapp.com/metrics/",data).then(data=>{
      let prob = data['prob']//the calculated diabetes risk probability
      writedata(data);
      //save data to localStorage
      console.log(data);
      const color = prob<0.5 ? 'MediumSeaGreen':'coral';
      const resultsMessage = prob<0.5 ? "Keep having a healthy lifestyle": "You should consider making a health checkup";
      //background color for some graphics depending on prob result
      // hide assess button
      //footer to fixed for better presentation
      //no need after modal
      //document.getElementById('results-card').style.setProperty('background-color',color,'important');
      //background color of results card
      document.getElementById('modal-body').style.setProperty("background-color", color, "important")
      document.getElementById('modal-content').textContent='Your risk probability is'+" "+prob+". "+resultsMessage+"";
      //put a message with calculated prob into card
    }
                                                                      );
  }
};
// postData function from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function postData(url = '', data = {
}
                        ) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
    ,
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }
                              );
  return response.json();
  // parses JSON response into native JavaScript objects
}
//save details of metric to localStorage
function writedata(inputdata){
  if (localStorage.getItem('records')===null){
    console.log('ksekiniste  tora tin dokimi sas')
    localStorage.setItem('records',JSON.stringify(inputdata))
  }
  else{
    var records2 = []
    var retrievedata = localStorage.getItem('records')
    records2.push(JSON.parse(retrievedata))
    records2 = records2.flat()
    records2.push(inputdata)
    localStorage.setItem('records',JSON.stringify(records2))
  }
};
document.getElementById('inqw').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/';
  }
};
document.getElementById('iwpg').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/';
  }
};
document.getElementById('iszlx').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/assess/';
  }
};
document.getElementById('i80i7').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/history/';
  }
};
document.getElementById('iuxzo').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/upload/';
  }
};
document.getElementById('issvr').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/upload/';
  }
};
document.getElementById('i6pnoz').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/history/';
  }
};
window.onload = () => {
};
