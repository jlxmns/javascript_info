/** Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

promise.then(f1).catch(f2);

Versus:

promise.then(f1, f2); */

// no, because the first one will catch errors from f1, while the second one will catch errors from promise itself but not from f1.