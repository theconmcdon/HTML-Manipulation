$(document).ready(function () {
    let $button1 = $('<button>A Nice Message</button>');
    $button1.appendTo('body');
    $button1.click(function () {
        alert('A nice message :)');
    });
    /////////////////////////////////////////////////////////////////////////////////////
    $('#btnSubmit').click(function () {
        let inputVal = $('#textInput').val();
        alert(inputVal);
    });
    ////////////////////////////////////////////////////////////////////////////////////
    let $div1 = $('<div></div>');
    $div1.css({
        'background-color': 'black',
        'height': '100px',
        'width': '100px'
    });
    $div1.appendTo('body');
    $div1.mouseenter(function () {
        $div1.css('background-color', 'red');
    });
    $div1.mouseleave(function () {
        $div1.css('background-color', 'black');
    });
    //////////////////////////////////////////////////////////////////////////////////////////
    let $newPara = $("<p>This is an example paragraph, but it's only one sentence.</p>");
    $newPara.appendTo('body');
    $newPara.click(function () {
        let newRandomColorHex = getRandomColor();
        $newPara.css('color', newRandomColorHex);
    });
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////
    let $button2 = $('<button>Yet another button</button>');
    $button2.appendTo('body');
    let $div2 = $('<div></div>');
    $div2.appendTo('body');
    let $span = $('<span>Connor McDonald</span>');
    $button2.click(function () {
        $span.appendTo($div2);
    });
    //////////////////////////////////////////////////////////////////////////////////////////////
    friends = ['Jack', 'John', 'Dave', 'Mike', 'Ralph', 'Jim', 'Jesus', 'Kim', 'Beverly', 'Cooper'];
    let $button3 = $('<button>Dear lord another one</button>');
    $button3.appendTo('body');
    let $ul1 = $('<ul></ul>');
    $ul1.appendTo('body');
    $button3.click(function () {
        for (i = 0; i < friends.length; i++) {
            let friend = friends[i];
            let $li = $('<li>' + friend + '</li>');
            $li.appendTo($ul1);
        }
    })
});