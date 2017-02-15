// Rename file + HTML file

var makeBlinkyStars = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
};

makeBlinkyStars.prototype = Object.create(makeDancer.prototype);
makeBlinkyStars.prototype.constructor = makeBlinkyStars;
Stars.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle('change');
};