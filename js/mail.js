function sendMail(from, name, message) {
    var link = "mailto:nikkazakov909@gmail.com"
             + "?cc=" + from
             + "&subject=" + encodeURIComponent(name)
             + "&body=" + encodeURIComponent(message)
    ;
    
    window.location.href = link;
}