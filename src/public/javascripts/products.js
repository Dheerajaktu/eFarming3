$(document).on('click', '#modalCloseButton', function onModalClose() {
    $('input,textarea,select').val('');
});
$(document).on('click', '#addProductFormResetButton', function onFormReset() {
    $('input,textarea,select').val('');
})

/*----------Add Products AJAX---------*/
$(document).on('click', '#addProductButton', () => {
    const pImage = $('#productImage').val();
    const pTitle = $('#productTitle').val();
    const pPrice = $('#productPrice').val();
    const pMOQ = $('#productMOQ').val();
    const pDescription = $('#productDescription').val();;
    const pVisibility = $('#productVisibility').val();;
    const pTransportation = $('#productTransportation').val();;

    if (pTitle != '' && pPrice != '' && pMOQ != '' && pDescription != '' && pVisibility != '' && pTransportation != '') {

        let data = {};
        $.each($('#addProductForm').serializeArray(), function fieldValues() {
            
            data[this.name] = this.value;
        });
        const URL = `/addNewProduct`;
        $.ajax({
            url: URL,
            data,
            type: 'POST'
        }).then(response => {
            if (response.status == '200') {
                alert('Product Added Successfully');
            } else {
                alert('Error While Adding Product')
            }
        })

    } else {
        alert('Please Fill All the Values');
    }

})