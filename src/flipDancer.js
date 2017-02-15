// Refactor to pseudoclassical

var makeFlipDancer = function(top, left, timeBetweenSteps) {

  //this = object.creat(makeBlinkyDancer.prototype)
  // this.$node = $('<span class="cloud"><img src="https://img.clipartfest.com/2957cf9c48cd3c166cc6cd13893bb9b0_storm-gif-images-transparent-cloud-clipart-gif_1000-500.gif"></span>');
  // console.log(this.$node);

  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;
  // this.$node.attr('src', 'https://img.clipartfest.com/2957cf9c48cd3c166cc6cd13893bb9b0_storm-gif-images-transparent-cloud-clipart-gif_1000-500.gif');
  // console.log(this.$node);
  this.$node.addClass('.cloud');

  // var oldStep = this.step;
  // return blinkyDancer;
};

makeFlipDancer.prototype = Object.create(makeDancer.prototype);
makeFlipDancer.prototype.constructor = makeFlipDancer;

makeFlipDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle('change');
};