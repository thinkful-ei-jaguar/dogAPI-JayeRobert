import $ from 'jquery';
import './index.css';

function getDogImage(num) {
  if(!num || num > 50 || num < 1){
    num = 3;
  }
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let num = $('.input-field').val();
    getDogImage(num);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});