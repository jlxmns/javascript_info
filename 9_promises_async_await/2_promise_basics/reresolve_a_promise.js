/** What’s the output of the code below?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); */

//It will always be resolved instantly with result 1. The promise object will have its state changed immediately and, once changed, it is immutable. So, the second resolve() call will be ignored.