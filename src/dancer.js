// Refactor to pseudoclassical

// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // var dancer = {};
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img src="http://i.giphy.com/l3q2KVexs6fFZErqo.gif"></span>');
  this.step();
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  // return dancer;
};

makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
  this.$node.css({
    'top': top,
    'left': left
  });

};


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

makeDancer.prototype.lineUp = function() {
  window.dancers.forEach(function(dancer) {
    var totalLeft = 0;
    var totalTop = 400;
    dancer.setPosition(totalTop);
  });
};

makeDancer.prototype.scatter = function() {
  this.newTop = $('body').height() * Math.random();
  this.newLeft = $('body').width() * Math.random();
  makeDancer.prototype.move.call(this.$node, this.newTop, this.newLeft);
};
  
makeDancer.prototype.move = function(top, left) {
  $(this).stop().animate({
    'top': top,
    'left': left
  }, 1000);
};

