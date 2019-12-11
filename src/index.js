import $ from 'jquery';
import './index.css';
/*
function getDogImage(num) {
  if(!num){
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
  let hml='';
  responseJson.message.map(element=>{
    hml+=`<img src="${element}" class="results-img"></img>`;
  });
  $('.results').html(hml);
  $('.results').removeClass('hidden');
}
*/

function getDogImage(name) {
  fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let name = $('.input-field').val();
    getDogImage(name);
  });
}

function displayResults(responseJson) {
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`);

  $('.results').removeClass('hidden');
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});