// Refactor to pseudoclassical

var makeJumpDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
    this.$node = $('<span class="cloud"></span>');
  
  makeDancer.call(this, top, left, timeBetweenSteps, '<img src="https://img.clipartfest.com/2957cf9c48cd3c166cc6cd13893bb9b0_storm-gif-images-transparent-cloud-clipart-gif_1000-500.gif">');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;

  // var oldStep = this.step;
  // return blinkyDancer;
};

makeJumpDancer.prototype = Object.create(makeDancer.prototype);
makeJumpDancer.prototype.constructor = makeBlinkyDancer;

makeJumpDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle('change');
};
