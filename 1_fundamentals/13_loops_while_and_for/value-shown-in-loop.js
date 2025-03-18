/** For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

    The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );

The postfix form i++

let i = 0;
while (i++ < 5) alert( i ); */

// The first loop outputs 1, 2, 3, 4, while the second loop outputs 1, 2, 3, 4, 5. They do not alert the same values.

/** For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

    The postfix form:

for (let i = 0; i < 5; i++) alert( i );

The prefix form:

for (let i = 0; i < 5; ++i) alert( i ); */

// The first loop outputs 0, 1, 2, 3, 4. The second loop outputs 0, 1, 2, 3, 4. They output the same.
