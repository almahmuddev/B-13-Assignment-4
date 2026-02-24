
<!-- question number ONE -->
## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<!-- answer of the question number ONE -->
### getElementById() select one single element through elements id. It only works with id of a component. 
### getElementsByClassName() select multiple elements through class name. like couple of elements have same class and it will work for all of these.
### querySelector() select the first matching element. It can be selected via id, class or tag.
### querySelectorAll() select all matching elements. Selected via css class. It returns a nodelist.

<br> <br>
<!-- question number TWO -->

## How do you create and insert a new element into the DOM?

<!-- answer of the question number TWO -->
### first > create an element
### document.createElement(); 
### then we will insert ant texts or ... I mean (innerText / innerHTML / textContent); 
### then I will append the created one with its parent with appendChild() 
### thats it.

<br> <br>
<!-- qusestion number THREE -->
## What is Event Bubbling? And how does it work?

<!-- answer of the question number THREE -->
### event bubbling is a process or JS dom, where an event bubble through its parent elements. by clicking the element, element wont stop there, it also trigger the same event on its parent. That means it will continue to uprise.
