console.log("hello world")

if(jQuery) {
    console.log("jQuiery loaded")
}

else{   
    console.log("not loaded")
}

$('.faq-question').click( function() {
    $(this).children('p').slideToggle(500);
    $(this).children('button').toggleClass('closed open');
});


