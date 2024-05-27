// Write your code here!
document.getElementById('main');

const element = document.createElement('h1');

element.remove();

let newHeader = document.createElement('h1');
    newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "YOUR-NAME is the champion";