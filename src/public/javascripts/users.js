
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
                Swal.fire('Profile Updated Successfully');
                $('input').attr('readonly', true);
                $('#saveProfileButton').removeAttr('disabled');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again'
                });
            }
        })

    }

})



/*-------------Ajax call to contact User on click------------*/
$(document).on('click', '#contactSellerBtn', function contacUserBtn() {
    const sellerID = $(this).attr('data-contactSeller');
    const URL = `/contactSeller/${sellerID}`;
    console.log('----URL----', URL);
    $.ajax({
        url: URL,
        type: 'GET'

    }).then(response => {
        if (response.status == '200') {
            console.log('---AJAX data--', response);
        } else {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong! Please Refresh the page once!'
            // });
        }
    })

})


$(document).ready(function showAlert() {
    Swal.fire({
        icon: 'success',
        title: 'Alert',
        text: 'We decided to develop this project when Govt. of India introduced e Farming bills However Govt. Repealed these Bills so We are not working on this project nowdays - Regards - Dheeraj Sharma!!!'
    });
})




$(document).on('click', '#editProfileButton, #editProductDetailButton', function onFormChange() {
    $('input,textarea').removeAttr('readonly');
    $('#saveProfileButton, #editProductDetailSaveBtn, #addProductFormResetButton').removeAttr('disabled');

})

$(document).on('click', '#contactSellerBtn', function showModalContactSeller() {
    $('#exampleModal').modal('show');
})

$(document).on('click', '#closeModal_2,#closeModal_1', function hideModal() {
    $('#exampleModal').modal('hide');
})