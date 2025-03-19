/** Compare the two code fragments.

    The first one uses finally to execute the code after try...catch:

try {
  work work
} catch (err) {
  handle errors
} finally {
  cleanup the working space
}

The second fragment puts the cleaning right after try...catch:

    try {
      work work
    } catch (err) {
      handle errors
    }

    cleanup the working space

We definitely need the cleanup after the work, doesn’t matter if there was an error or not.

Is there an advantage here in using finally or both code fragments are equal? If there is such an advantage, then give an example when it matters. */

//the codes are different. in the second example, if there is an error that is not within the catch block, the execution will stop and the cleanup the working space will not be executed. in the first example, the cleanup the working space will always be executed.