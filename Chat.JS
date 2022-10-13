$('document').ready(function() {
// Make an initial message that displays a greeting and attach a date/time stamp to the message

const $firstmessage = $('<p.returnMessage>');
$firstmessage.html('This was quite a learning experience! <br>' + time());
$('.messageBox').append($firstmessage);
})


//create time function to be attached to all the messages

function time() {
    let today = new Date();       
    return today.toLocaleTimeString();
    }

/*Button functions: get input text from textInput by button mouse down, if no input alert is sent, mouse down event to print to messageBox.
 Mouse up will cause a random 'did you know' comment from switch statement "send", new <p> will be created and print to messageBox. 
 The last function is to clear the text input field on mouseup */
 $("#btn").mousedown(function() {
        let x = document.getElementById('textInput').value;

        if (x.length < 1) {
            return alert ('Please input a message')
        };
            
        $(".messageBox").append('<p class="sentMessage">' + x + '<br>' + time() + '</p>')

    });
        $('#btn').mouseup(function() {
            let y = Math.floor(Math.random() * 6 + 1);
            
            $(".messageBox").append('<p class="returnMessage">' + send(y) + "<br>" + time() + '</p>');
        });
                
                $('#btn').mouseup(function() {
                    document.getElementById('textInput').value = ''
                });
        

    function send(random) {
       
        
        switch (random) {
            case 1: return 'Did you know the unicorn is the national animal of Scotland. Chosen because of its connection with dominance\
            and chivalry as well as purity and innocence in Celtic mythology.'

            case 2: return 'Did you know a group of porcupines is called a prickle.'

            case 3: return 'Did you know wearing headphones for just an hour could increase the bacteria in your ear by 700 times.'

            case 4: return 'Did you know ancient Romans used to drop a piece of toast into their wine for good health - hence why\
            we "raise a toast".'

            case 5: return 'Did you know a flock of ravens is called a conspiracy.'

            case 6: return 'Worrying is like rocking in a chair.  It gives you something to do, but it doesn\'t get you anywhere'           
        }}
/* I spent a great deal of time watching tutorials on DOM manipulation and JQuery, I started off trying to mix and match code from others
but could never quite get it to work correctly.  I finally ended up erasing everything and starting over leaning heavily on MDN, W3schools,
and some JQuery documentation to build the above. None of the above is copy/paste.  But I definitely learned a great deal 
concerning syntax from the previously watched tutorials.  I did plagerize the random replies, I hope you find them interesting. */