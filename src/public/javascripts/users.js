
$(document).on('keyup', '#confirmPassword', () => {
    const passwordVal = $('#password').val();
    let confirmPasswordVal = $('#confirmPassword').val();
    if (confirmPasswordVal === passwordVal) {
        $('#confirmPassword').css('border', '3px solid green');
    } else {
        $('#confirmPassword').css('border', '3px solid red');
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

$(document).on('click', '#toggleButtonOpen', function open() {
    document.getElementById("mySidenav").style.width = "190px";
});
$(document).on('click', '#toggleButtonClose', function close() {
    document.getElementById("mySidenav").style.width = "0";
});

/*----------update user's details---------*/
$(document).on('click', '#saveProfileButton', () => {
    const name = $('#firstName').val();
    const number = $('#mobileNumber').val();
    const email = $('#email').val();
    if (name != '' && number != '' && email != '') {

        let data = {};
        $.each($('#profileForm').serializeArray(), function fieldValues() {
            data[this.name] = this.value;
        });
        const userID = $('#hiddenfield').val();
        const URL = `updateProfile/${userID}`
        $.ajax({
            url: URL,
            data,
            type: 'POST'
        }).then(response => {
            if (response.status == '200') {
                alert('Profile Updated Successfully')
            } else {
                alert('Error While Updating Profile')
            }
        })

    }

})