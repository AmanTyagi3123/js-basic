/*

Browser events are something very interesting to study.
Most of the JS follows a sequential approach where whatever you have written first is executed first.
But in some cases like browser events some events provoke certain things to happen without any sequence.
This totally depends upon how someone interacts with the browser.

There are various events like onclick, onsubmit, etc., etc.

There are 3 ways of declaring an action according to an event taking place :-
(i) Embedding the script logic in html tag.(Worst way in JS to handle the situation as it has scalability issues.)
(ii) Using specific commands like onclick, onsubmit.(This way too leads to certain problems.)
(iii) Using addEventListener(This is the best way to do the same as it allows various tasks to be performed very easily.)

Some more ways -->

During the time of use of Internet explorer there was attachEvent() method.
Also, there is a jquery - on command which do the same task.

Some important properties associated with event object are -->

type, timeStamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY,
altkey, ctrlkey, shiftkey, keyCode.

All these commans worth some time to be invested for better understanding. And, hence reading the documentation would
be a great help.

Eg -> Suppose we are accessing an element with id as cricket.

document.getElementById('cricket').addEventListener('click',function(e){
    console.log(e);
}, false/true)

Decoding the above syntax.
Here, e is the event object about which we have talked earlier. Then as you can see after the function definition
there is a true/false associated. This refers to two different ways of accessing information.

false is the default value and you don't need to mention it specifically.

When false is written it leads to bubbling which leads to bottom up approach where if two events are given in which
both can be trigerred on one click then firstly the event associated with the most deepest layer is executed then 
we go to the top.

When true is written it leads to event capturing where the opposite of bubbling takes place.

For eg -> Suppose there is a list element which is a part of an unordered list. Then firstly the event associated
with the id of that list element is executed then only the event associated with the ul tag is triggered. This happens
in the case of bubbling. While in case of event capturing, first ul event is trigerred then only the event associated
with id is triggered.

These both methods are called event propagation.

The above is a very important concept.

                                 *********
                                |Important| 
                                 *********

If we want neither bubbling nor capturing, in simple words, we don't want event propagation ->

In this case we will use the stopPropagation() method associated with the event object.

preventDefault method is used to prevent the associated task with certain event.

To remove any element on any event, we can use two different approaches -->
(i) remove(obj) method.
(ii) obj.parentNode.removeChild(obj);

One more method is tagName() which is used to access tag name for elements.

*/