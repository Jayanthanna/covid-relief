//remove.html button visiblity changer
function submit123()
{
    $("#button-submit").hide();
    $("#disabled").show();
    //after 3 seconds opload button will be visible again 
    window.setTimeout(change,3000);
}
//change function to again change visibility
function change()
{
  $("#button-submit").show();
  $("#disabled").hide();
}
//sending form information to remove google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyVmhDtXXnxUe9spS9Gnd3vvIc5lGg3xH7leEyCrigHc458NAcCcUQNZCMtK0Z2V9-V/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => 
{
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response =>window.open('intermediate.html','_self'))
  .catch(error => console.error('Error!', error.message))
})
