import $ from 'jquery';
import './index.css';

function getDogImage(num) {
  if(!num || num > 50 || num < 1){
    num = 3;
  }
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let num = $('.input-field').val();
    getDogImage(num);
  });
}
function displayResults(responseJson) {
  console.log(responseJson.message[0]);
  console.log("ok");
  console.log(responseJson);
  let hml='';
  responseJson.message.map(element=>{
    hml+=`<img src="${element}" class="results-img"></img>`;
  });
 $('.results').html(hml);
  $('.results').removeClass('hidden');
  console.log("it should display");


}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});