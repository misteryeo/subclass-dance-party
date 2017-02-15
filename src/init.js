$(document).ready(function() {
  window.dancers = [];

  $('.lineUp').on('click', function() {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
  });

  $('.scatter').on('click', function() {
    window.dancers.forEach(function(dancer) {
      dancer.scatter();
    });
  });

  $('body').on('mouseenter', '.cloud', function() {
    $(this).fadeOut();
  }); 

  $('body').on('mouseover', '.dancer', function(event) {
    $(this).slideToggle();
  });

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


// Adds a cursor of your choice linked through the HTML
  $('.danceCursor').mousemove(function(e) {
    var top = (e.clientY - 100 > 32) ? e.clientY - 100 : 32;
    $('.shape').offset({
      top: top,
      left: e.clientX - 150
    });
  });

// On body on mouse enter do something? $(this).hide
/*
var $kapow = $('img')
kapow.css
body append kapow
settimeout($kapow.show.bind($kapow),)
*/




  // $('.pairUp').on('click', function() {
  //   for (var i = 0; i < window.dancers.length; i++) {
  //     if (i % 2 === 0) {
  //       window.dancers[i].pairLeft();
  //     } else {
  //       window.dancers[i].pairRight();
  //     }
  //   }
  // });

});