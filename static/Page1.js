document.getElementById('iaft4').onclick = (event) => {
	postData('https://biomedicalapp.herokuapp.com/metrics/', {
	  age: document.getElementById("i3q7j").value,
	  BMI: document.getElementById("i9agp").value,
	  waist: document.getElementById("ijgfa").value,
	  vegfruit: document.getElementById("i3kjl").value,
	  protein: document.getElementById("ip2ij").value,
	}
			)
	  .then(data => {
	  console.log(data);
	  // JSON data parsed by `data.json()` call
	}
		   );
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
  