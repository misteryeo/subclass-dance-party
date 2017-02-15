var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  
// Allows dancers to move away from cursor upon mouseover
  var that = this;
  this.$node.mouseover(function() {
    makeDancer.prototype.scatter.call(that);
  });
};

makeDancer.prototype.setPosition = function(top, left) {
  this.$node.css({
    'top': top,
    'left': left
  });
};

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

