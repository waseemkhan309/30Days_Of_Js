// DOM Manipulation
// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById('Task1').innerHTML = "I'm Waseem Khan.";
// Task 2: Select an HTML element by its CLASS and change its Background color.
document.querySelector('.Task2').style.backgroundColor = 'red';
// Activity 2:
// Task 3: Create a new div element with some text content and append it to the body.
let div = document.createElement('div');
div.innerHTML = 'I am a new div element.';
document.body.appendChild(div);
// Task 4: Create a new li element and add it to an existing ul list.
let ul = document.createElement('ul');
let li = document.createElement('li');
li.innerHTML = 'I am a new li element.';
document.body.appendChild(ul);
ul.appendChild(li);
// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
document.querySelector('#Task1').remove();
// Task 6: Remove the last child of a specific HTML element.
// console.log(document.getElementsByTagName('html'))
let parentElement = document.getElementsByTagName('ul');
parentElement.removeChild(parentElement.lastElementChild)
// Activity 4: Modifying Attributes and classes
// Task 7: Select an  HTML element and change one of its attributes(e.g. src of an img tag.).
document.querySelector('img').src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
// Task 8: Add and Remove a CSS class to/from an HTML element.
document.querySelector('img').classList.add('newClass');
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById('Task9Button').addEventListener('click', function () {
    document.getElementById('Task9Paragraph').innerHTML = 'The text has been changed!';
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById('Task10Element').addEventListener('mouseover', function () {
    this.style.borderColor = 'blue';
});