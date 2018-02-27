'use strict';
let colorClass = '';

function main() {
  $('.select-color').on('click',() => {
    let selectedColor = $(this).attr('class')
    if(selectedColor === 'select-color cyan not-selected') {
      colorClass = 'cyan';
    } else if(selectedColor === 'select-color yellow not-selected') {
      colorClass = 'yellow';
    } else if('select-color magenta not-selected') {
      colorClass = 'magenta';
    }
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
  }
)
  $('.box').on('click', function(){
    $(this).toggleClass(colorClass);
    })
  };

$(document).ready(main);
