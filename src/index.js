import $ from 'jquery';
import './style.scss';

let seconds = 0;
$('#main').html(`You've been on this page for ${seconds} seconds.`);

setInterval(() => {
  seconds += 1;
  $('#main').html(`You've been on this page for ${seconds} seconds.`);
}, 1000);
