/** What do you think? Will the .catch trigger? Explain your answer.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert); */

// no, it won't. The error is thrown asynchronously, so the promise can't catch it. The promise is created and the error is thrown after 1 second, so the promise is already settled by then.