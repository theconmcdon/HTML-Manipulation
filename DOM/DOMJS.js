document.addEventListener('DOMContentLoaded', function () {
    let buttonNice = document.createElement('button');
    buttonNice.textContent = 'A Nice Message';
    document.body.appendChild(buttonNice);
    buttonNice.className = 'nice'
    buttonNice.addEventListener('click', function () {
        alert('A nice message :)');
    });
    ///////////////////////////////////////////////////////////////////
    let buttonSubmit = document.getElementById('btnSubmit');
    buttonSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        alert(document.getElementById('textInput').value);
    });
    ///////////////////////////////////////////////////////////////////////////
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.style.backgroundColor = 'black';
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.backgroundColor = 'black';
    div.addEventListener('mouseenter', function () {
        div.style.backgroundColor = 'red';
    });
    div.addEventListener('mouseleave', function () {
        div.style.backgroundColor = 'black';
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    let paragraph = document.createElement('p');
    paragraph.textContent = "This is an example paragraph, but it's only one sentence."
    document.body.appendChild(paragraph)
    paragraph.addEventListener('click', function () {
        let newRandomColorHex = getRandomColor();
        paragraph.style.color = newRandomColorHex;
    });
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    ////////////////////////////////////////////////////////////////////////
    let newButton = document.createElement('button');
    newButton.className = 'newBtn';
    newButton.textContent = 'Yet another button';
    document.body.appendChild(newButton);
    let newDiv = document.createElement('div');
    newDiv.className = 'newDiv'
    document.body.appendChild(newDiv);
    newButton.addEventListener('click', function () {
        let span = document.createElement('span');
        span.textContent = 'Connor McDonald'
        newDiv.appendChild(span);
    });
    /////////////////////////////////////////////////////////////////////////////////
    friends = ['Jack', 'John', 'Dave', 'Mike', 'Ralph', 'Jim', 'Jesus', 'Kim', 'Beverly', 'Cooper'];
    let anotherButton = document.createElement('button');
    anotherButton.className = 'anotherBtn';
    anotherButton.textContent = 'How many buttons do we actually need guys';
    document.body.appendChild(anotherButton);
    let newList = document.createElement('ul');
    newList.className = 'newList'
    document.body.appendChild(newList);
    anotherButton.addEventListener('click', function () {
        for (i = 0; i < friends.length; i++) {
            let li = document.createElement('li');
            li.textContent = friends[i];
            newList.appendChild(li);
        };
    });
});