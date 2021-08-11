
function blink_text() {
    $('.main-titulo').animate({color:"white"});
    $('.main-titulo').animate({color:"yellow"});
}
setInterval(blink_text, 1000);


