// https://css-tricks.com/debouncing-throttling-explained-examples/

// https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
// first time trigger => execute it right away, record lastRan timestamp
// second time trigger => check if it more the wait or not
// => if more than wait, execute it right away and record lastRan
// => if less than wait, set timeout, and execute this one once the wait is due
// => keep canceling the timer and updating the function that will be triggered in the future
// with most up-to-date args

// analogy: order the cocktail, set 30 mins timer, first time order a manhattan, done
// timer starts ticking, 15mins come back again and order a mojito, refused by bartender
// 25mins later, come back again and order martiny, refused again
// 30mins, timer rings, bartender gives me martiny

var throttle = function(func, limit) {
  var inThrottle,
    lastFunc,
    lastRan;
  return function() {
    var context = this,
      args = arguments;
    if (!inThrottle) {
      // run the function immediately
      func.apply(context, args)
      // set a timestamp for invocation
      lastRan = Date.now()
      // put into throttle status       
      inThrottle = true
    } else {
      // like a debounce, clear the last invocation
      clearTimeout(lastFunc)
      // create that setTimeout with the correct interval
      lastFunc = setTimeout(function() {
      	// ? why we check this again?
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          // set a new running timestamp
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  };
};