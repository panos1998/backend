//add an event listener on modal show() method so can display each box specific data
document.getElementById('staticBackdrop').addEventListener('show.bs.modal',(event)=>{
  console.log('paok')
  var button = event.relatedTarget;
  //get the data of the result box we clicked
  var details = {
    //save the useful data as key-value pairs
    "Weight": button.getAttribute('data-weight'),"BMI":button.getAttribute('data-bmi'),
    "Waist-circ":button.getAttribute('data-waist'), "Oxymetry": button.getAttribute("data-oxymetry"),
    "Grain": button.getAttribute("data-grain"),"Fruit": button.getAttribute('data-fruit'),
    "Vegetables":button.getAttribute('data-vegan'),"Dairy": button.getAttribute('data-dairy'),
    "Protein":button.getAttribute('data-protein'),"Total Calories":button.getAttribute("data-total_cal"),
    "Date":button.getAttribute('data-dt'),"Risk probability":button.getAttribute('data-prob')};
  var list = document.getElementById('display-card').children[1]//select the list which lies inside display card
  list.style.setProperty('list-style', 'none', 'important')//remove li dots
  var display_card = document.getElementById('display-card');
  // select the display card
  let color = details['Risk probability']<0.1?"lightgreen":"coral"
  display_card.style.setProperty("background-color",color,"important");
  console.log(list);
  console.log(display_card);
  for ([key, value] of Object.entries(details)){
    //for every key-value pair  inside our dictionary
    var list_item = document.createElement('li');
    // create a list element
    list_item.innerHTML="<b>"+key+"</b>: "+value+"";
    //put the useful data context inside list_item
    list.appendChild(list_item);
    // finally append  the element to the list parent
  }
}
                                                          )
//case we close the modal, it is critical to delete the list  content in order accomondate the next result context without problem ;)
document.getElementById('staticBackdrop').addEventListener('hide.bs.modal', (event)=>{
  var list = document.getElementById('display-card').children[1]
  list.innerHTML="";
}
                                                          )
//this is the view button, it has 2 functionalities
document.getElementById('iy4ml').onclick = (event) => {
  document.getElementById('history-container').style.setProperty('display','inline-block','important');
  //first display the content
  document.getElementById('hide-button').style.setProperty('display','inline-block','important');
  //display the hide button, their functionality is 
  ;
  // complementary
};
//function for reading localstorage data which lie inside record variable
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
    //retrieve data and save each record value to its appropriate data-* attributes
    retrievedata.forEach(element => {
      const clone = record.cloneNode(true);
      for (const [key, value] of Object.entries(element)){
        clone.setAttribute('data-'+key+'', ''+value+'');
        if(clone.getAttribute('data-prob')<0.5){
          //some coloring depending on result
          clone.style.setProperty('background-color','lightgreen', 'important');
        }
        else {
          //clone the style for every box-result element
          clone.style.setProperty('border-color', 'coral','important');
          clone.style.setProperty('background-color', 'coral', 'important');
        }
      }
      //as button label place the probability
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
document.getElementById('delete-history-button').onclick = (event) => {
  document.getElementById('history-container').remove();
  localStorage.removeItem('records');
  document.getElementById('footer').style.setProperty('position','relative','important');
};
document.getElementById('ip1e').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/';
  }
};
document.getElementById('izxo').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/';
  }
};
document.getElementById('itked').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/assess/';
  }
};
document.getElementById('i5z9m').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/history/';
  }
};
document.getElementById('ijxfk').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/upload/';
  }
};
document.getElementById('i04p6').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '/upload/';
  }
};
window.onload = () => {
};
