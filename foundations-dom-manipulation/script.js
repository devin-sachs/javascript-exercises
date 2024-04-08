const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const newPDiv = document.createElement('p');
newPDiv.classList.add('newPDiv');
newPDiv.textContent =  'Hey I\'m red!';
newPDiv.style.cssText = "color: red;"

const newH3Div = document.createElement('h3');
newH3Div.classList.add('newH3Div');
newH3Div.textContent =  'I\'m a blue h3!';
newH3Div.style.cssText = "color: blue;"

container.appendChild(content);
container.appendChild(newPDiv);
container.appendChild(newH3Div);

const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.style.cssText = 'background-color: pink; border-style: solid;'

container.appendChild(newDiv); 

//Could use a new container and append the new container, OR just append the newDiv.
//newContainer.appendChild(newH1);

//const newContainer = document.querySelector('.newDiv');

const newH1 = document.createElement('h1');
newH1.classList.add('newH1');
newH1.textContent = 'I\'m in a div';

const newP2Div = document.createElement('p');
newP2Div.classList.add('newP2Div');
newP2Div.textContent = 'ME TOO!'

//console.log(newContainer);
// newContainer.appendChild(newH1);
// newContainer.appendChild(newP2Div);

newDiv.append(newH1);
newDiv.append(newP2Div);


function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
