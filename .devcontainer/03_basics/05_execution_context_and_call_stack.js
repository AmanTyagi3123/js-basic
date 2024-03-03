/*

Global Execution context is stored in this. Executed using thread.
JS is single threaded.

There is one function execution context as well.

Another is Eval execution context.

JS program runs in two phases -->
1.) Memory Creation Phase. (Memory is allocated only.)
2.) Execution Phase. (All the execution is done in this phase.)

 ___
|Imp| -->  Whenver a function is called a new execution environment is generated where new variable environment plus execution thread is generated.
 ***
*/