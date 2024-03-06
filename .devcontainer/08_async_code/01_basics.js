/*

JS is synchronous. JS is Single threaded(There is only one thread therefore, execution is slow).
Synchronous means that one iteration is executed first than only we move on to the other.

Note that even being single threaded JS is quiet useful because it is never used individually. Instead it is always
is a part of a larger environment.

Blocking Code -> Block the flow of program. -> Read file sync.
Non-Blocking Code -> Does not block execution. -> Read file async.

Web API's help JS to execute the code in an asynchronous way. There are certain things like setTimeout() which actually
pushes your data into a queue and then immediately this data is pushed into the stack. Thus, allowing certain tasks to be
performed accordingly.
 
Moreover, there is a fetch API which helps you to prioritize certain tasks by pushing them in seperate task queue
which is a priority queue.

*/