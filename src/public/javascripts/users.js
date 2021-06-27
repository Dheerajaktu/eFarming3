// const { default: swal } = require("sweetalert");

$(document).on('keyup', '#confirmPassword', () => {
    const passwordVal = $('#password').val();
    let confirmPasswordVal = $('#confirmPassword').val();
    console.log('---here---', passwordVal, confirmPasswordVal);
    if (confirmPasswordVal === passwordVal) {
        $('#confirmPassword').css('border-color', 'green');
        // $('#btnSubmit').prop("disabled", false).css('cursor', 'not-allowed');
    } else {
        $('#confirmPassword').css('border-color', 'red');
    }
})



window.setTimeout(function () {
    $("#showSucessAlert").fadeTo(500, 0).slideUp(500, function () {
        $(this).remove();
    });
}, 2000);
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
