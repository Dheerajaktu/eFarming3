// const { default: swal } = require("sweetalert");

$(document).on('keyup', '#confirmPassword', () => {
    const passwordVal = $('#password').val();
    let confirmPasswordVal = $('#confirmPassword').val();
    if (confirmPasswordVal === passwordVal) {
        $('#confirmPassword').css('border-color', 'green');
    } else {
        $('#confirmPassword').css('border-color', 'red');
    }
})

window.setTimeout(function () {
    $("#showSucessAlert").fadeTo(1000, 0).slideUp(1000, function () {
        $(this).remove();
    });
}, 3000);
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition => {
        console.log('---location---', showPosition);
    });
}
$.getJSON("http://jsonip.com?callback=?", function (data) {
    console.log("Your ip: " + data.ip);
});

/* const fullUrl = window.location.href;
console.log('hererhe', fullUrl);
if (fullUrl.includes('/home')) {

    $('#logoutUser').show();
    $('#signUpUser').hide();
    $('#loginUser').hide();
} else {

    $('#logoutUser').hide();
}

*/