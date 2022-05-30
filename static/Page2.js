document.getElementById('results-card').style.setProperty("display","none","important");
document.getElementById('assess-button').onclick = (event) => {
  var input = [document.getElementsByName('weight')[0].value, document.getElementsByName('systolic')[0].value, document.getElementsByName('bmi')[0].value,document.getElementsByName("diastolic")[0].value, document.getElementsByName('waist')[0].value,  document.getElementsByName('grain')[0].value,  document.getElementsByName('oximetry')[0].value, document.getElementsByName('fruits')[0].value,  document.getElementsByName('protein')[0].value,  document.getElementsByName('vegetables')[0].value,  document.getElementsByName('dairy')[0].value, document.getElementsByName('calories')[0].value];
  let hasNegative = input.some(value=> value<0);
  let hasNull = input.some(value=> value=="");
  console.log(input)
  if(hasNegative){
    document.getElementById('results-text').innerHTML="Please don't give negative values"
    document.getElementById('results-card').style.setProperty("display","block","important");
    document.getElementById('results-card').style.setProperty('background-color','Khaki',"important");
  }
  else if(hasNull){
    document.getElementById('results-text').innerHTML="Please fill all fields"
    document.getElementById('results-card').style.setProperty("display","block","important");
    document.getElementById('results-card').style.setProperty('background-color','Khaki',"important");
  }
  else{
    document.getElementById('form-box').style.setProperty("display","none","important");
    const data = {
      weight:input[0],
      BMI:input[2],
      waist:input[4],
      systolic:input[1],
      diastolic:input[3],
      oxymetry:input[6],
      grain:input[5],
      fruit:input[7],
      vegan:input[9],
      dairy:input[10],
      protein:input[8],
      total_cal:input[11]
    }
    postData("https://biomedicalapp.herokuapp.com/metrics/",data).then(data=>{
      let prob = data['prob']
      writedata(data);
      console.log(data);
      const color = prob<0.5 ? 'lightgreen':'coral';
      document.getElementById('assess-button').style.setProperty('display','none','important');
      document.getElementById('results-card').style.setProperty('display','block','important');
      document.getElementById('footer').style.setProperty('position','fixed','important');
      document.getElementById('results-card').style.setProperty('background-color',color,'important');
      document.getElementById('results-text').innerHTML='Your risk probability is'+" "+prob+"";
    }
                                                                      );
  }
};
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
document.getElementById('iwpg').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = 'https://biomedicalapp.herokuapp.com/';
  }
};
document.getElementById('iszlx').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = 'https://biomedicalapp.herokuapp.com/assess';
  }
};
document.getElementById('i80i7').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = 'https://biomedicalapp.herokuapp.com/history/';
  }
};
document.getElementById('navigator-history').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = 'https://biomedicalapp.herokuapp.com/history/';
  }
};
window.onload = () => {
};
