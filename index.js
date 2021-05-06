//this function makes sure only districts that are in particular state selected before in select tag are shown
function state123()
{
  //takes selected value of state
  var state=document.getElementById("state").value;
  //takes all values of district in array
  var dis = document.getElementById("district");
  dis.value="";
  //going through all options in the array
  for(var i=0;i<dis.options.length;i++)
  {
    //if value of district is not the same as state it is hidden using JQuery
    if(dis.options[i].value!=state)
    {
      $(dis.options[i]).hide();
      
    }
    //else if it is equal it is shown using JQuery
    else{
      $(dis.options[i]).show();
    }
  }
}
//sending form data to google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbzVDQWz44rld_vgKyPK8eOroQ6dwG2Ft3aXUW_jeUqzN_59UVSKGEtc-LoJ8pY2dc3tRw/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => 
{
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response =>window.open('intermediate.html','_self'))
  .catch(error => console.error('Error!', error.message))
})
//when submit button is pressed this function makes sure 2 things
//1st in readonly input field value is set to selected district thus it can go to google sheets
//2nd disables submit button and enables bootstrap spinner grow class button
function submit123()
{
  document.getElementById("hiddeninput").value = $( "#district option:selected" ).text();
  $("#button-submit").hide();
  $("#disabled").show();
  //after 3 seconds buttons again change their visibility through change() function
  window.setTimeout(change,3000);
}
function change()
{
  $("#button-submit").show();
  $("#disabled").hide();
}