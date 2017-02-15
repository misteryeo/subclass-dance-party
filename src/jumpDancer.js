var makeJumpDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
};

makeJumpDancer.prototype = Object.create(makeDancer.prototype);
makeJumpDancer.prototype.constructor = makeJumpDancer;

makeJumpDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle('change');
};
