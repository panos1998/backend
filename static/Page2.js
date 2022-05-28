document.getElementById('asses').onclick = (event) => {
  data = {
    age: document.getElementsByName("Age")[0].value,
    BMI: document.getElementsByName("bmi")[0].value,
    waist: document.getElementsByName("Waist")[0].value,
    vegfruit: document.getElementsByName("vegfruit")[0].value,
    protein: document.getElementsByName("protein")[0].value}
  postData('https://biomedicalapp.herokuapp.com/metrics/', data)
    .then(data => {
    console.log(data);
    // JSON data parsed by `data.json()` call
  }
         );
  const row1 = document.getElementById("row1");
  const row2 = document.getElementById("row2");
  const row3 = document.getElementById("row3");
  const row4 = document.getElementById("row4");
  const results = document.getElementById("results");
  row1.style.display="none";
  row2.remove();
  row3.remove();
  row4.remove();
  results.style.setProperty("display", "inline-block", "important")
  //document.getElementById("resultscell").style.display = "inline-block";
  document.getElementById("footer").style.setProperty("position","fixed", "important");
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
document.getElementById('igjq3').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = 'https://biomedicalapp.herokuapp.com/';
  }
};
document.getElementById('ioo4h').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = 'https://biomedicalapp.herokuapp.com/assess';
  }
};
window.onload = () => {
};
