// Rename file + update in HTML

var makeClouds = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class="cloud"><img class="cloud" src="img/cloud.gif"/></span>');
  this.timeBetweenSteps = 3000;
};

makeClouds.prototype = Object.create(makeDancer.prototype);
makeClouds.prototype.constructor = makeClouds;

makeClouds.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};